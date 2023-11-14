import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdenAIService {

  private apiUrl = "https://api.edenai.run/v2/image/object_detection";
  private apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjM4YzBiZmYtODkzMS00YTI5LWFiNTYtN2UyMmI3OWJmZTQwIiwidHlwZSI6ImFwaV90b2tlbiJ9.We--2K35TKCvUHHw1XldmjVm41feJB8W_EgCjzyitcM"; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  performObjectDetection(imageUrl: string): Observable<any> {
    const options = {
      show_original_response: false,
      fallback_providers: "",
      providers: "amazon, google",
      file_url: imageUrl,
    };

    const headers = {
      Authorization:this.apiKey,
    };

    return this.http.post(this.apiUrl, options, { headers });
  }
}
