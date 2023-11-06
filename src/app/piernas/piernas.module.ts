import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiernasPageRoutingModule } from './piernas-routing.module';

import { PiernasPage } from './piernas.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiernasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PiernasPage]
})
export class PiernasPageModule {}
