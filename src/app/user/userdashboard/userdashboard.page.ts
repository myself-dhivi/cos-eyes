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

      this.filePath = this.image.path; // Store the file path
      this.setPathAndNavigate(this.image.base64String);
    } catch (error) {
      console.error(error);
    }
  }

  async uploadFromDevice(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.filePath = URL.createObjectURL(file); // Store the file path
      const reader = new FileReader();

      reader.onload = async (e) => {
        if (e.target) {
          const base64Image = e.target.result as string;
          this.setPathAndNavigate(base64Image);
        } else {
          console.error('Failed to convert image to base64.');
        }
      };

      reader.readAsDataURL(file);
    } else {
      console.error('No image selected');
    }
  }

  async Analyze() {
    this.navigate ? this.router.navigate(['/output-page'])  : (this.errorMsg = true);
  }

  private setPathAndNavigate(imageData: string) {
    this.storage.set('imageData', imageData);
    this.path = 'data:image/png;base64,' + imageData;
    if (this.filePath) {
      this.storage.set('filePath', this.filePath); // Store the file path
    }
    this.navigate = true;
    this.errorMsg = false;
  }
}
