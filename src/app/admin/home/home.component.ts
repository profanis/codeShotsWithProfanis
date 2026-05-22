import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  template: `<h1>Admin Home</h1>`,
})
export class AdminHomeComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users?_limit=3')
      .subscribe();
  }
}
