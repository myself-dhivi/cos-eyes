import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.page.html',
  styleUrls: ['./userdashboard.page.scss'],
})
export class UserdashboardPage {

  constructor(
    private router: Router,
    public photoService: PhotoService
    ) {
    // Initialize Camera if using Cordova
  }

  openCamera() {
    
      this.photoService.addNewToGallery();
    
  }

  uploadFromDevice() {
    // Handle uploading from the device here
    // You can implement file upload functionality
  }

}