import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserdashboardPageRoutingModule } from './userdashboard-routing.module';
import { Storage } from '@ionic/storage';
import { UserdashboardPage } from './userdashboard.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdashboardPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UserdashboardPage],
  providers:[Storage]

})
export class UserdashboardPageModule {}
