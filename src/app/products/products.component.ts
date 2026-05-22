import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `<h1>Products Page</h1>`,
})
export class ProductsComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .subscribe();
  }
}
