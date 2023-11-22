import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sentivity',
  templateUrl: './sentivity.page.html',
  styleUrls: ['./sentivity.page.scss'],
})
export class SentivityPage implements OnInit {
  base64Image: any;
  sensitivityValue = "";
  values = ["Unlikely", "Possible", "Likely"];

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private http: HttpClient,
    private location: Location,
    private router : Router
  ) {}

  async ngOnInit() {
    this.storage.create();
    this.base64Image = await this.storage.get('Base64String');
    this.sensitivity();
    };



  back() {
    this.location.back();
  }

  playAudio() {
    this.textToSpeech
      .speak(  this.sensitivityValue + "content in the Image")
      .then(() => console.log('Done'))
      .catch((reason: any) => console.log(reason));
  }
  sensitivity(){
    const randomIndex = Math.floor(Math.random() * this.values.length);
    this.sensitivityValue = this.values[randomIndex];
  }
}
