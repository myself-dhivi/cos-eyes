import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetectNSFWService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  detectNSFW(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(`${this.apiUrl}/nsfw_detect/`, formData);
  }
}
