import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CounterService } from '../services/counter.service';
import { BaseNodeComponent } from './base-node.component';
import { FiveComponent } from './five.component';
import { FourComponent } from './four.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FourComponent, FiveComponent, AsyncPipe],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      (click)="decreaseCounter()"
      >2 - {{ counterService.counter() }}
    </span>

    <app-four class="node" />

    <app-five class="node" />
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TwoComponent extends BaseNodeComponent {
  counterService = inject(CounterService);

  decreaseCounter() {
    this.counterService.decreaseCounter();
  }
}
