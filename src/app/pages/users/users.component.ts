import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent],
  template: `
    <p>users works!</p>
    <app-user-card [user]="user" isEnabled="true">
      <ng-template #cardContent>
        This is the card content that should be projected into the user card
        component.
      </ng-template>
    </app-user-card>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements AfterViewInit {
  @ViewChild(UserCardComponent)
  userCard!: UserCardComponent;

  @ViewChildren(UserCardComponent)
  userCards!: QueryList<UserCardComponent>;

  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'test@test.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 123',
      city: 'Springfield',
      zipcode: '12345',
      geo: {
        lat: '123',
        lng: '456',
      },
    },
    phone: '555-555-5555',
    website: 'example.com',
    company: {
      name: 'ABC Inc',
      catchPhrase: 'Catchy phrase',
      bs: 'BS',
    },
  };

  ngAfterViewInit(): void {
    this.userCard.isEnabled = false;
  }
}
