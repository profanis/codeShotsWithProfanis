import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {
  url = 'products';

  constructor() {
    super();
  }
}
