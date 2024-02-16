import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { isDirty } from 'src/app/angular-utils';
import { BaseNodeComponent } from './base-node.component';
import { SevenComponent } from './seven.component';
import { SixComponent } from './six.component';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [SixComponent, SevenComponent],
  template: `
    @if (isDirty) {
      <span class="node-label" [style.background-color]="color"> 3 </span>
    }

    <app-six class="node" />

    <app-seven class="node" />
  `,
  styles: `


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThreeComponent extends BaseNodeComponent {
  get isDirty() {
    console.log('2 isDirty', isDirty(this));
    return true;
  }
}
