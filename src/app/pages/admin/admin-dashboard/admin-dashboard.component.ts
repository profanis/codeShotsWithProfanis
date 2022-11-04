import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <h2>Admin</h2>
    <div class="admin-container">
      <nav>
        <a routerLink="/admin/stock">Admin - Stock</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: true,
  imports: [RouterModule],
  styles: [
    `
      .admin-container {
        border: 1px dashed gray;
        min-height: 300px;
      }
    `,
  ],
})
export class AdminDashboardComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.data);
  }
}
