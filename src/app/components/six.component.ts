import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { isDirty } from 'src/app/angular-utils';
import { BaseNodeComponent } from './base-node.component';
import { ElevenComponent } from './eleven.component';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [ElevenComponent],
  template: `
    @if (isDirty) {
      <span class="node-label" [style.background-color]="color">6</span>
    }
    <app-eleven class="node" />
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SixComponent extends BaseNodeComponent {
  get isDirty() {
    console.log('4 isDirty', isDirty(this));
    return true;
  }
}
