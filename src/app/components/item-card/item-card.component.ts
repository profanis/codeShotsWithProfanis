import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="card--container">
      <mat-card-content>
        <p>{{ content() }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .card {
      &--container {
        width: 250px;
        height: 300px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  `,
})
export class ItemCardComponent {
  title = input<string>();
  subtitle = input<string>();
  content = input<string>();
}
