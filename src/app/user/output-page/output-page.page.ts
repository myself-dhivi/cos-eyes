import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.page.html',
  styleUrls: ['./output-page.page.scss'],
})
export class OutputPagePage implements OnInit {
  base64Image: any;
  caption= "Caption of the image Will be displayed here. This is sample of captioning image we are working on the AI algorithm once done we can give the real time data for this";
  sensitivityValue= "30%";

  constructor(
    private storage : Storage,
    private textToSpeech: TextToSpeech
  ) { }

  ngOnInit() {
    this.storage.create()
    this.storage.get("imageURL").then((imageData) => {
      this.base64Image = imageData;
    });
  }

  playAudio() {
    this.textToSpeech
    .speak(this.caption)
    .then(() => console.log('Done'))
    .catch((reason: any) => console.log(reason));
  }
}
