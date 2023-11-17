import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
  blobImage: any;

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private location: Location,
    private router: Router,
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.base64Image = await this.storage.get('Base64String');
    this.caption = await this.storage.get('Caption')
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
    this.router.navigate(['/sentivity']);
  }
}
