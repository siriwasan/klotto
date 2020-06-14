import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoTicketPage } from './lotto-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: LottoTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottoTicketPageRoutingModule {}
