import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutputPagePage } from './output-page.page';

const routes: Routes = [
  {
    path: '',
    component: OutputPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutputPagePageRoutingModule {}
