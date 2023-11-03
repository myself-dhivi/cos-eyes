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
  path: any;
  navigate = false
  errorMsg =false
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
  }

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });
      const imageUrl = "data:image/png;base64,"+image.base64String;
      console.log(image);
      this.storage.set('imageURL', imageUrl);
      this.path = imageUrl; 
      this.navigate = true
    } catch (error) {
      console.error(error);
    }
  }

  async uploadFromDevice(event: any) {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target) {
          const base64Image = e.target.result as string;
          console.log(base64Image);
          this.storage.set('imageURL', base64Image);
          this.path = base64Image; 
          this.navigate = true
        } else {
          console.error('Failed to convert image to base64.');
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.error('No image selected');
    }
  }
  Analyse(){
    if(this.navigate){
      this.router.navigate(["/output-page"])
    }else(
      this.errorMsg = true
    )
  
  }
}
