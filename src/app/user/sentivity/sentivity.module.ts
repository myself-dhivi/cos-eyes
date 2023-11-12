import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { SentivityPageRoutingModule } from './sentivity-routing.module';

import { SentivityPage } from './sentivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentivityPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SentivityPage],
  providers:[Storage]
})
export class SentivityPageModule {}
