import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoughtPageRoutingModule } from './bought-routing.module';

import { BoughtPage } from './bought.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoughtPageRoutingModule
  ],
  declarations: [BoughtPage]
})
export class BoughtPageModule {}
