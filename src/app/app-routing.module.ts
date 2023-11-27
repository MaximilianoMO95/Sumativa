import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { deslogeadoGuard } from './deslogeado.guard';
import { logeadoGuard } from './logeado.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/inicio',
    redirectTo: 'menu/inicio',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/rutina',
    redirectTo: 'menu/rutina',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/espalda',
    redirectTo: 'menu/espalda',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/espalda',
    redirectTo: 'menu/espalda',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/brazos',
    redirectTo: 'menu/brazos',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/hombros',
    redirectTo: 'menu/hombros',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/piernas',
    redirectTo: 'menu/piernas',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/pectoral',
    redirectTo: 'menu/pectoral',
    pathMatch: 'full',
    
  },
  {
    path: 'menu/plan-nutricional',
    redirectTo: 'menu/plan-nutricional',
    pathMatch: 'full',
    
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full',
    
  },
  {
  path: '**',
  redirectTo: 'e404',
  pathMatch: 'full',
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
    canActivate: [deslogeadoGuard]
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    
    canActivate: [deslogeadoGuard]
  },
 
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [logeadoGuard]
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  
  
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
