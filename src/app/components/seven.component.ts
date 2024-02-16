import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isDirty } from 'src/app/angular-utils';
import { BaseNodeComponent } from './base-node.component';
import { ThirteenComponent } from './thirteen.component';
import { TwelveComponent } from './twelve.component';

@Component({
  selector: 'app-seven',
  standalone: true,
  imports: [TwelveComponent, ThirteenComponent, AsyncPipe],
  template: `
    @if (isDirty) {
      <span class="node-label" [style.background-color]="color">7</span>
    }

    <app-twelve class="node" />

    <app-thirteen class="node" />
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SevenComponent extends BaseNodeComponent {
  counterSignal = signal(0);
  counter = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  constructor() {
    super();
    // setInterval(() => {
    //   this.counterSignal.set(this.counterSignal() + 1);
    //   // this.counter.next(this.counter.value + 1);
    // }, 1000);
  }

  get isDirty() {
    console.log('5 isDirty', isDirty(this));
    return true;
  }
}
