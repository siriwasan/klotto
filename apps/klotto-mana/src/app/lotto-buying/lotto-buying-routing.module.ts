import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoBuyingPage } from './lotto-buying.page';

const routes: Routes = [
  {
    path: '',
    component: LottoBuyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottoBuyingPageRoutingModule {}
