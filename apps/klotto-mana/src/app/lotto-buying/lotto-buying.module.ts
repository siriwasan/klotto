import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottoBuyingPageRoutingModule } from './lotto-buying-routing.module';

import { LottoBuyingPage } from './lotto-buying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottoBuyingPageRoutingModule
  ],
  declarations: [LottoBuyingPage]
})
export class LottoBuyingPageModule {}
