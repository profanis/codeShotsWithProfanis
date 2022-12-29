import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'app-card-footer',
  standalone: true,
})
export class CardFooterDirective {}

@Directive({
  selector: 'app-card-header',
  standalone: true,
})
export class CardHeaderDirective {}

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
    <ng-content select="app-card-header"></ng-content>
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">{{ title }}</div>

        <!-- Content -->
        <div class="card__content">
          <ng-container
            *ngIf="carMainContent"
            [ngTemplateOutlet]="carMainContent.template"
          ></ng-container>
        </div>
        <!-- /Content -->

        <!-- Footer -->
        <ng-content
          *ngIf="carMainContent"
          select="app-card-footer"
        ></ng-content>
        <!-- /Footer -->
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @ContentChild(CardContentDirective) carMainContent?: CardContentDirective;
}
