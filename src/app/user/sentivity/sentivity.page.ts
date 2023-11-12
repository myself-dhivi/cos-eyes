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
  caption = "This is a Image of te Cat Looking Curiously.";
  sensitivityValue = "30%";

  constructor(
    private storage: Storage,
    private textToSpeech: TextToSpeech,
    private http: HttpClient,
    private location: Location,
    private router : Router
  ) {}

  ngOnInit() {
    this.storage.create();
    this.storage.get("imageData").then((imageData) => {
      this.base64Image = imageData;
  
    });
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
  sensitivity(){
    this.router.navigate(["/sentivity"])
  }
}
