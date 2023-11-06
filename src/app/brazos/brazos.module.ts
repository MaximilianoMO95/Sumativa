import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrazosPageRoutingModule } from './brazos-routing.module';

import { BrazosPage } from './brazos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrazosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BrazosPage]
})
export class BrazosPageModule {}
