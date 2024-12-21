import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService {
  abstract endpoint: string;

  abstract baseUrl: string;
  constructor(private http: HttpClient) {}

  private getFullUrl(): string {
    return `${this.baseUrl}/${this.endpoint}`;
  }

  get<T>(params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.getFullUrl(), { params, headers });
  }

  post<T>(body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.getFullUrl(), body, { headers });
  }

  put<T>(body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(this.getFullUrl(), body, { headers });
  }

  delete<T>(params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(this.getFullUrl(), { params, headers });
  }
}
