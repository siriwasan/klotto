import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottoTicketPageRoutingModule } from './lotto-ticket-routing.module';

import { LottoTicketPage } from './lotto-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottoTicketPageRoutingModule
  ],
  declarations: [LottoTicketPage]
})
export class LottoTicketPageModule {}
