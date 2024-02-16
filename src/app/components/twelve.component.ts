import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { isDirty } from 'src/app/angular-utils';
import { BaseNodeComponent } from 'src/app/components/base-node.component';

@Component({
  selector: 'app-twelve',
  standalone: true,
  imports: [],
  template: `
    @if (isDirty) {
      <span class="node-label" [style.background-color]="color">12</span>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TwelveComponent extends BaseNodeComponent {
  get isDirty() {
    console.log('5a isDirty', isDirty(this));
    return true;
  }
}
