import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaldaPage } from './espalda.page';

const routes: Routes = [
  {
    path: '',
    component: EspaldaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaldaPageRoutingModule {}
