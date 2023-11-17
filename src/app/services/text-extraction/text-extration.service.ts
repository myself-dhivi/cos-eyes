// text-extraction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextExtrationService {
  private apiUrl = `${environment.apiUrl}/extract_text/`;

  constructor(private http: HttpClient) {}

  extractTextFromImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(this.apiUrl, formData);
  }
}
