import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EspaldaPageRoutingModule } from './espalda-routing.module';

import { EspaldaPage } from './espalda.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaldaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EspaldaPage]
})
export class EspaldaPageModule {}
