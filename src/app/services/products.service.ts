import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  get() {
    const products = [...new Array(50)].map((it, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      description: `This is product ${index + 1}`,
    }));
    return of(products);
  }

  getById(id: number) {
    return {
      id,
      name: `Product ${id}`,
      description: `This is product ${id}`,
    };
  }
}