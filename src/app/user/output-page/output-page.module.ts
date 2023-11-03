import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';

import { OutputPagePageRoutingModule } from './output-page-routing.module';

import { OutputPagePage } from './output-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutputPagePageRoutingModule
  ],
  declarations: [OutputPagePage],
  providers:[Storage]
})
export class OutputPagePageModule {}
