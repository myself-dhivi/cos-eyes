import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular'; // Import Platform

@Component({
  selector: 'app-sentivity',
  templateUrl: './sentivity.page.html',
  styleUrls: ['./sentivity.page.scss'],
})
export class SentivityPage implements OnInit {
  base64Image: any;
  sensitivityValue = "";
  values = ["Safe", "Possible", "Likely"];

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private location: Location,
    private router: Router,
    private platform: Platform // Inject Platform
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.base64Image = await this.storage.get('Base64String');
    this.sensitivity();
  }

  back() {
    this.location.back();
  }

  playAudio() {
    const textToRead = this.sensitivityValue + "sensitive content in the Image";

    if (this.platform.is('cordova')) {
      // If running on a mobile device
      this.textToSpeech
        .speak(textToRead)
        .then(() => console.log('Done'))
        .catch((reason: any) => console.log(reason));
    } else {
      // If running in a browser
      const speechSynthesis = window.speechSynthesis;
      const speechUtterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesis.speak(speechUtterance);
    }
  }

  async sensitivity() {
    const index = await this.storage.get("NSFW");
    this.sensitivityValue = this.values[index];
    console.log(index, this.sensitivityValue);
  }
}
