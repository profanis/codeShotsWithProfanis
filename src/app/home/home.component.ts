import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Home Page</h1>`,
})
export class HomeComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .subscribe();
  }
}
