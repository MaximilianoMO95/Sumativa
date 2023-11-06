import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiernasPage } from './piernas.page';

const routes: Routes = [
  {
    path: '',
    component: PiernasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiernasPageRoutingModule {}
