import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LandingPagePageRoutingModule
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
