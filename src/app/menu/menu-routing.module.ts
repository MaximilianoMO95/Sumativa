import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      }, {
        path: 'espalda',
        loadChildren: () => import('../espalda/espalda.module').then( m => m.EspaldaPageModule)
      },
      {
        path: 'pectoral',
        loadChildren: () => import('../pectoral/pectoral.module').then( m => m.PectoralPageModule)
      },
      {
        path: 'piernas',
        loadChildren: () => import('../piernas/piernas.module').then( m => m.PiernasPageModule)
      },
      {
        path: 'hombros',
        loadChildren: () => import('../hombros/hombros.module').then( m => m.HombrosPageModule)
      },
      {
        path: 'brazos',
        loadChildren: () => import('../brazos/brazos.module').then( m => m.BrazosPageModule)
      },
      {
        path: 'rutina',
        loadChildren: () => import('../rutina/rutina.module').then( m => m.RutinaPageModule)
      },
      {
        path: 'plan-nutricional',
        loadChildren: () => import('../plan-nutricional/plan-nutricional.module').then( m => m.PlanNutricionalPageModule)
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
