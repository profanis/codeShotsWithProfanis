import { Injectable } from '@angular/core';
import { products, Product as ProductType } from './db';
import { Observable, of } from 'rxjs';

export interface Product extends ProductType {}

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private products = products;

  getProducts(): Observable<Product[]> {
    return of(this.products().slice());
  }

  getProduct(id: number): Observable<Product | undefined> {
    const foundProduct = this.products().find(
      (product: Product) => product.id == id,
    );
    return of(foundProduct);
  }
}
