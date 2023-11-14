import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';


import { CameraPagePageRoutingModule } from './camera-page-routing.module';

import { CameraPagePage } from './camera-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [CameraPagePage],
  providers:[Storage]

})
export class CameraPagePageModule {}
