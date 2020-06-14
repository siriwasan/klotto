import { Component, OnInit } from '@angular/core';
import { PickerController, AlertController } from '@ionic/angular';
import { PickerOptions, PickerColumn, PickerColumnOption } from '@ionic/core';
import { AppService } from '../app.service';

export interface Ticket {
  id: number;
  nums: string[];
}

const mockTickets: Ticket[] = [
  { id: 1, nums: ['23', '12', '45', '25', '35', '12'] },
  { id: 2, nums: ['26', '24', '34', '45', '23', '23'] },
  { id: 3, nums: ['42', '35', '23', '44', '22', '11'] },
  { id: 4, nums: ['34', '35', '23', '45', '24', '18'] },
  { id: 5, nums: ['12', '34', '37', '55', '32', '02'] },
  { id: 6, nums: ['24', '54', '23', '06', '55', '01'] },
  { id: 7, nums: ['44', '41', '39', '27', '33', '23'] },
  { id: 8, nums: ['24', '45', '65', '58', '25', '05'] },
  { id: 9, nums: ['42', '33', '11', '24', '33', '17'] },
  { id: 10, nums: ['23', '34', '21', '37', '45', '21'] },
];

@Component({
  selector: 'app-lotto-ticket',
  templateUrl: './lotto-ticket.page.html',
  styleUrls: ['./lotto-ticket.page.scss'],
})
export class LottoTicketPage implements OnInit {
  tickets: Ticket[];
  private selectedTicket: Ticket;
  private tempTicket: Ticket;

  constructor(
    private appService: AppService,
    private pickerCtrl: PickerController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.tickets = mockTickets.slice(0, this.appService.ticketNumber);
  }

  async editNumbers(ticket: Ticket) {
    console.log(ticket);
    this.selectedTicket = ticket;
    this.tempTicket = { id: ticket.id, nums: [...ticket.nums] };

    const opts: PickerOptions = {
      cssClass: 'edit-ticket',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: (blah) => {
            console.log('Done');
            this.pickerCtrl.dismiss(null, 'cancel');
          },
        },
      ],
      columns: this.createColumns(),
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.addEventListener('ionPickerColChange', async (event: any) => {
      // console.log('select changed:', event);
      const data = event.detail;
      const colSelectedIndex = data.selectedIndex;
      const colOptions = data.options;

      let value = colOptions[colSelectedIndex].value;
      let i = 0; // loop until not select disabled choice
      while (value === null) {
        value = colOptions[i++].value;
      }

      const index = +(data.name as string).substr(data.name.length - 1) - 1;
      this.tempTicket.nums[index] = value;

      const columns = this.createColumns();
      picker.columns = columns;
      // tslint:disable-next-line: deprecation
      picker.forceUpdate();
    });

    picker.present();
    picker.onWillDismiss().then((data) => console.log('dismiss'));
    picker.onDidDismiss().then(async (data) => {
      const result = await Promise.all([
        picker.getColumn('number1'),
        picker.getColumn('number2'),
        picker.getColumn('number3'),
        picker.getColumn('number4'),
        picker.getColumn('number5'),
        picker.getColumn('number6'),
      ]);

      this.selectedTicket.nums = [
        result[0].options[result[0].selectedIndex].value,
        result[1].options[result[1].selectedIndex].value,
        result[2].options[result[2].selectedIndex].value,
        result[3].options[result[3].selectedIndex].value,
        result[4].options[result[4].selectedIndex].value,
        result[5].options[result[5].selectedIndex].value,
      ];
      // console.log(this.selectedTicket);
    });
  }

  private createColumns() {
    const cols: PickerColumn[] = [];
    for (let index = 0; index < 6; index++) {
      cols.push({
        name: `number${index + 1}`,
        options:
          index !== 5
            ? this.createColumnOptions(1, 69, index)
            : this.createColumnOptions(1, 29, index),
        selectedIndex: +this.tempTicket.nums[index] - 1,
        refresh: () => console.log('refresh'),
      });
    }

    return cols;
  }

  private createColumnOptions(begin: number, end: number, colIndex = null) {
    const colOpts: PickerColumnOption[] = [];
    const selectedNums = [...this.tempTicket.nums];
    // delete selectedNums[selectedNums.length - 1];

    for (let index = begin; index <= end; index++) {
      const num = index.toString().padStart(2, '0');
      const canDisable =
        selectedNums.includes(num) && num !== this.tempTicket.nums[colIndex];
      colOpts.push({
        text: num,
        value: canDisable ? null : num,
        disabled: canDisable,
      });
    }
    return colOpts;
  }

  async confirm() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Power Play',
      message:
        'เพิ่มเงินเพียง <strong>50 บาท</strong><br>เพื่อรับรางวัลที่มากกว่า!!!',
      buttons: [
        {
          text: 'ไม่จำเป็น',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
