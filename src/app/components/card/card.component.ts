import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appCardMainContent]',
  standalone: true,
})
export class CardContentDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- https://codepen.io/mcraiganthony/pen/NxGxqm -->
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">{{ title }}</div>

        <!-- Content -->
        <div class="card__content">
          <ng-container
            [ngTemplateOutlet]="carMainContent || defaultTemplate"
            [ngTemplateOutletContext]="{ $implicit: context }"
          ></ng-container>
        </div>
        <!-- /Content -->

        <button class="btn btn--block card__btn">Button</button>
      </div>
    </div>

    <ng-template #defaultTemplate let-user>
      <p>User name: {{ user.username }}</p>
      <p>First Name: {{ user.firstName }}</p>
      <p>Last Name: {{ user.lastName }}</p>
    </ng-template>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @ContentChild(CardContentDirective, { read: TemplateRef })
  carMainContent?: TemplateRef<any>;

  context = {
    username: 'profanis',
    firstName: 'Fanis',
    lastName: 'Prodromou',
  };
}
