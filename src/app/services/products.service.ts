import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {
  endpoint: string = 'products';
  baseUrl: string = 'https://api.com';

  constructor(
    private storageService: StorageService,
    http: HttpClient,
  ) {
    super(http);
  }
}
