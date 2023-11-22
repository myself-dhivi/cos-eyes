import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.page.html',
  styleUrls: ['./output-page.page.scss'],
})
export class OutputPagePage implements OnInit {
  base64Image: any;
  caption = "";
  ExtractedText = "";

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private location: Location,
    private router: Router,
    private platform: Platform
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.base64Image = await this.storage.get('Base64String');
    this.caption = await this.storage.get('Caption');
    this.ExtractedText = await this.storage.get('ExtractedText');
  }

  back() {
    this.location.back();
  }

  playAudio() {
    const message =
      "Image Description is " + this.caption + ". Extracted Text in the image " + this.ExtractedText;
  
    if (this.platform.is('cordova')) {
      // Running on a mobile device
      console.log('Running on Cordova. Using TextToSpeech plugin.');
      this.textToSpeech
        .speak(message)
        .then(() => console.log('TextToSpeech plugin: Speech done'))
        .catch((reason: any) => console.error('TextToSpeech plugin error:', reason));
    } else {
      // Running in a browser
      console.log('Running in a browser. Using Web Speech API.');
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(message);
  
        utterance.onend = () => {
          console.log('Web Speech API: Speech done');
        };
  
        synth.speak(utterance);
      } else {
        // Browser does not support speech synthesis
        console.warn('Speech synthesis is not supported in this browser.');
      }
    }
  }
  

  sensitivity() {
    this.router.navigate(['/sentivity']);
  }
}
