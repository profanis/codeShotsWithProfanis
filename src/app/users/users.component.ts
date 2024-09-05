import { Component, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ItemCardComponent } from '../components/item-card/item-card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ItemCardComponent],
  template: `
    <h2>Users</h2>
    <div class="search-container">
      @for (item of users(); track $index) {
        <app-item-card
          [title]="item.name"
          [subtitle]="item.description"
          [content]="item.description"
        />
      }
    </div>
  `,
  styles: `
    .search-container {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  `,
})
export class UsersComponent {
  users = toSignal(inject(UsersService).get());
}
