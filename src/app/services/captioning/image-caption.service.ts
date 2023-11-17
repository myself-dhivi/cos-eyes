
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {
  private apiUrl = `${environment.apiUrl}/predict/`;

  constructor(private http: HttpClient) {}

  generateCaption(file: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<{ caption: string }>(this.apiUrl, formData);
  }
}
