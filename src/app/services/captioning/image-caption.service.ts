// image-caption.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {
  private apiUrl = 'http://127.0.0.1:8000/predict/'; // Replace with your FastAPI server URL

  constructor(private http: HttpClient) {}

  generateCaption(file: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<{ caption: string }>(this.apiUrl, formData);
  }
}
