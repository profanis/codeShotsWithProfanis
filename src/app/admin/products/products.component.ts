import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  template: `<h1>Admin Products</h1>`,
})
export class AdminProductsComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .subscribe();
  }
}
