import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PectoralPage } from './pectoral.page';

const routes: Routes = [
  {
    path: '',
    component: PectoralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PectoralPageRoutingModule {}
