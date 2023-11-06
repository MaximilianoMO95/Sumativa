import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrazosPage } from './brazos.page';

const routes: Routes = [
  {
    path: '',
    component: BrazosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrazosPageRoutingModule {}
