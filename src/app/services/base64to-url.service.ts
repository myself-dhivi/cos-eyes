import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Base64toURLService {
  private apiBaseUrl = 'https://www13.api2convert.com/v2/dl/web2';
  private apiKey = '68ab34c76d5fdba1bf977ebd4b25853e';
  private jobID = 'a6f691e2-839e-49e5-829d-dc2d97486fe1';

  constructor(private http: HttpClient) {}

  uploadBase64Image(base64Content: string, filename: string): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/upload-base64/${this.jobID}`;

    const headers = new HttpHeaders({
      'x-oc-api-key': this.apiKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });

    const requestBody = {
      content: base64Content,
      filename: filename,
    };

    return this.http.post(apiUrl, requestBody, { headers: headers })
      .pipe(
        catchError((error) => {
          console.error('Error uploading image:', error);
          return throwError(error);
        })
      );
  }
}
