import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Define a type or interface for the response
interface ImaggaApiResponse {
  result: {
    tags: { tag: { en: string } }[];
  };
}

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.page.html',
  styleUrls: ['./output-page.page.scss'],
})
export class OutputPagePage implements OnInit {
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
      this.getImageTags(imageData);
    });
  }

  async getImageTags(imageUrl: string) {
    try {
      const apiKey = 'acc_14406a3a3dd357b';
      const apiSecret = 'ede7a45f426c47231024ce315eb45ca4';
      const imaggaApiUrl = `https://api.imagga.com/v2/tags?image_url=${encodeURIComponent(imageUrl)}`;

      const response = await this.http.post<ImaggaApiResponse>(imaggaApiUrl, null, {
        headers: {
          'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
        }
      }).toPromise(); 

      if (response && response.result && response.result.tags) {
        const tags = response.result.tags;
        this.caption = "Tags: " + tags.map((tag: any) => tag.tag.en).join(', ');
      } else {
        console.log("Invalid response format");
      }
    } catch (error) {
      console.log(error);
    }
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
