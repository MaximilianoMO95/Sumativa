import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanNutricionalPage } from './plan-nutricional.page';

const routes: Routes = [
  {
    path: '',
    component: PlanNutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanNutricionalPageRoutingModule {}
