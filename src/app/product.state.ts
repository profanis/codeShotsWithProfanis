import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Product } from './db';

@Injectable({
  providedIn: 'root',
})
export class ProductsState {
  #product: WritableSignal<Product | null> = signal(null);
  product = this.#product.asReadonly();

  setProduct(product: Product) {
    this.#product.set(product);
  }
}
