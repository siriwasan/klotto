import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lotto-buying',
  templateUrl: './lotto-buying.page.html',
  styleUrls: ['./lotto-buying.page.scss'],
})
export class LottoBuyingPage implements OnInit {
  ticketNumbers = 4;

  constructor(private navCtrl: NavController, private appService: AppService) {}

  ngOnInit() {}

  buyLotto() {
    console.log('Lotta was brought:', this.ticketNumbers);
    this.appService.ticketNumber = this.ticketNumbers;
    this.navCtrl.navigateForward('lotto-ticket');
  }
}
