import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'userdashboard',
    loadChildren: () => import('./user/userdashboard/userdashboard.module').then( m => m.UserdashboardPageModule)
  },
  {
    path: 'camera-page',
    loadChildren: () => import('./user/camera-page/camera-page.module').then( m => m.CameraPagePageModule)
  },
  {
    path: 'output-page',
    loadChildren: () => import('./user/output-page/output-page.module').then( m => m.OutputPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
