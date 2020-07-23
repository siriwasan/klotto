import { Component, OnInit } from '@angular/core';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Ticket } from '../../../../../lib/models/ticket';

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
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
  photo: SafeResourceUrl;
  tickets = mockTickets;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  takePicture() {
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    })
      .then((image) => {
        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
          image && image.dataUrl
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
