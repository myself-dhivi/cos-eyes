import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs';
import { ImageCaptionService } from 'src/app/services/captioning/image-caption.service';
import { TextExtrationService } from 'src/app/services/text-extraction/text-extration.service';

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
  Base64String: any;
  uploadedFileName: string | null = null;
  isLoading: boolean = false
  LoadingText = ""
  selectedLanguage: string = 'eng';

  constructor(
    private router: Router,
    private storage: Storage,
    private imageCaptionService: ImageCaptionService, 
    private TextExtraction : TextExtrationService
  ) { }

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
      this.setPathAndNavigate("data:image/png;base64," + this.image.base64String);
      this.Base64String = "data:image/png;base64," + this.image.base64String
      this.uploadedFileName = "Capture_image.png";
      console.log(this.uploadedFileName);
    } catch (error) {
      console.error(error);
    }
  }

  async uploadFromDevice(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.uploadedFileName = file.name; 

      const reader = new FileReader();

      reader.onloadend = () => {
        this.Base64String = reader.result as string;
        this.setPathAndNavigate(this.Base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  Analyze() {
    try {
      this.isLoading = true;
      if (!this.Base64String) {
        this.errorMsg = true;
        this.isLoading = false;
        return;
      }
  
      const file = this.base64toFile(this.Base64String, 'uploaded_image.png', 'image/png');
     
      this.imageCaptionService.generateCaption(file)
        .pipe(
          tap(response => {
            this.isLoading = false;
             this.LoadingText = "Captioning the Image .. "
           
            console.log("generated Tag: " + response.caption);
            this.storage.set("Caption", response.caption);
          
            this.TextExtraction.extractTextFromImage(file , this.selectedLanguage)
              .pipe(
                tap(textResponse  => {
                  this.LoadingText = "Extracting Text .. "
                  if(textResponse.extracted_text){
                    console.log("ExtractedText: " + textResponse.translated_text);
                  const cleanedResponse = textResponse.translated_text.replace(/\n/g, ' ');
                  this.storage.set("ExtractedText", cleanedResponse);
                  }else{
                    this.storage.set("ExtractedText", textResponse.message);
                  }
                  
                })
              ) 
              .subscribe(() => {
                this.router.navigate(["/output-page"]);
              });
          }),
        )
        .subscribe();
    } catch (error) {
      console.error('Error generating caption:', error);
      this.isLoading = false;
    }
  }
  
  
  



  private async setPathAndNavigate(Base64String: any) {
    await this.storage.set('Base64String', Base64String);
    this.navigate = true;
    this.errorMsg = false;
  }

  private base64toFile(base64String: string, fileName: string, mimeType: string): File {
    const byteString = atob(base64String.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([arrayBuffer], { type: mimeType });
    return new File([blob], fileName, { lastModified: Date.now() });
  }

}
