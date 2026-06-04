import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/products?delay=2000';

  getProducts(search: string): Observable<Product[]> {
    const params = new HttpParams()
      .set('search', search)
      .set('error', search === 'error');
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
