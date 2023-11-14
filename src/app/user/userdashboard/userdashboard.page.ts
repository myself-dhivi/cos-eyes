// Inside UserdashboardPage class
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.page.html',
  styleUrls: ['./userdashboard.page.scss'],
})
export class UserdashboardPage implements OnInit {
  path: string | null = null;
  errorMsg = false;
  navigate = false;
  image: any;
  filePath: string | null = null;
  uploadedFileName: string | null = null;
  imageurl: any;

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
  }

  logout() {
    this.router.navigate(['/']);
  }

  async openCamera() {
    try {
      this.image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });
      this.setPathAndNavigate("data:image/png;base64," +this.image.base64String);
      console.log(this.image.base64String);

    } catch (error) {
      console.error(error);
    }
  }

async uploadFromDevice(event: Event) {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      this.imageurl = reader.result as string;
      console.log(this.imageurl);
      this.setPathAndNavigate(this.imageurl);
    };

    reader.readAsDataURL(file);
    
  }
}

  async Analyze() {
    this.navigate ? this.router.navigate(['/output-page']) : (this.errorMsg = true);
  }
  private async setPathAndNavigate(imageData: string) {
    await this.storage.set('imageData', imageData);
    this.navigate = true;
    this.errorMsg = false;
  }
}
