import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('products', {
      headers: {},
    });
  }
}
