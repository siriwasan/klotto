import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoughtPage } from './bought.page';

const routes: Routes = [
  {
    path: '',
    component: BoughtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoughtPageRoutingModule {}
