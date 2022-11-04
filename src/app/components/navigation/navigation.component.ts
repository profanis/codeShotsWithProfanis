import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// Imports of used components
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
// For components using angular-animations

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <div>
        <ul class="nav-items">
          <li><a routerLink="/">Dashboard</a></li>
          <li><a routerLink="/products">Products</a></li>
          <li>
            <a routerLink="/admin">Admin</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {}
