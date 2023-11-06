import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { OutputPagePageRoutingModule } from './output-page-routing.module';

import { OutputPagePage } from './output-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutputPagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [OutputPagePage],
  providers:[Storage]
})
export class OutputPagePageModule {}
