import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentivityPage } from './sentivity.page';

const routes: Routes = [
  {
    path: '',
    component: SentivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentivityPageRoutingModule {}
