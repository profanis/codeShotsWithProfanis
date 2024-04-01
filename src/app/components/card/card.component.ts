import { CommonModule } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  Input,
  contentChildren,
  effect,
  input,
  viewChildren,
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
  selector: 'app-card-content',
  standalone: true,
})
export class CardContentDirective {}

@Component({
  selector: 'app-card-title',
  standalone: true,
  template: ` {{ title() }}`,
})
export class CardTitleComponent {
  title = input<string>();
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardTitleComponent],
  template: `
    <!-- https://codepen.io/mcraiganthony/pen/NxGxqm -->
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title-container">
          @if (title) {
            <div class="card__title">
              <app-card-title [title]="title" />
            </div>
          } @else {
            @for (title of titles; track title) {
              <app-card-title [title]="title" />
            }
          }
        </div>

        <!-- Content -->
        <div class="card__content">
          <ng-content select="app-card-content"></ng-content>
        </div>
        <!-- /Content -->

        <!-- Footer -->
        @if (carContent()) {
          <ng-content select="app-card-footer"></ng-content>
        }
        <!-- /Footer -->
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() titles?: string[];

  titleElements = viewChildren(CardTitleComponent, { read: ElementRef });
  carContent = contentChildren(CardContentDirective);

  constructor() {
    effect(() => {
      const totalHeight = this.titleElements().reduce((acc, el) => {
        const { height } = el.nativeElement.getBoundingClientRect();
        return acc + height;
      }, 0);
      console.log('totalHeight', totalHeight);
    });
  }
}
