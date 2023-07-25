import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <ul class="nav-items">
        <li class="mat-toolbar-row">
          <a routerLink="/">Home</a>
        </li>
        <li class="mat-toolbar-row">
          <a routerLink="/dashboard">Dashboard</a>
        </li>
        <li class="mat-toolbar-row">
          <a routerLink="/users">Users</a>
        </li>
      </ul>
    </mat-toolbar>
  `,
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {}
