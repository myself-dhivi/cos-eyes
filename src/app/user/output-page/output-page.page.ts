import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EdenAIService } from 'src/app/services/eden-ai.service';
import { Base64toURLService } from 'src/app/services/base64to-url.service';
import { tap } from 'rxjs/operators'; 

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.page.html',
  styleUrls: ['./output-page.page.scss'],
})
export class OutputPagePage implements OnInit {
  base64Image: any;
  caption = "";
  sensitivityValue = "";

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private location: Location,
    private router: Router,
    private edenAIService: EdenAIService,
    private base64toUrl: Base64toURLService
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.base64Image = await this.storage.get('imageData');
    this.Base64ToUrl();
  }

  Base64ToUrl() {
    console.log('working 1');
    const base64Content = this.base64Image;
    const filename = 'Cos-eyes_AI.png';
    console.log('working 2');
    this.base64toUrl
      .uploadBase64Image(base64Content, filename)
      .pipe(
        tap((response) => {
          console.log('Upload successful', response);
          this.getCaption();
        }),
      )
      .subscribe(); 
  }

  getCaption() {
    this.edenAIService
      .performObjectDetection(this.base64Image)
      .pipe(
        tap((response) => {
          console.log(response);
          this.caption = response.caption;
        })
      )
      .subscribe(); 
  }

  back() {
    this.location.back();
  }

  playAudio() {
    this.textToSpeech
    .speak(this.caption)
    .then(() => console.log('Done'))
    .catch((reason: any) => console.log(reason));
  }

  sensitivity() {
    this.router.navigate(['/sensitivity']);
  }
}
