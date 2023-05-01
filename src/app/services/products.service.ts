import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  get() {
    const products = [...new Array(10)].map((it, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: 100,
      description: `This is product ${index + 1}`,
    }));
    return of(products);
  }
}
