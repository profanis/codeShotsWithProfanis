import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService {
  abstract url: string;
  private readonly DOMAIN = 'this.isMyDomain';
  private httpClient = inject(HttpClient);

  get() {
    return this.httpClient.get(`${this.DOMAIN}/${this.url}`);
  }

  post() {}

  put() {}

  delete() {}
}
