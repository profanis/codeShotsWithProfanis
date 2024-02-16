import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { isDirty } from 'src/app/angular-utils';
import { BaseNodeComponent } from './base-node.component';
import { EightComponent } from './eight.component';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [EightComponent],
  template: `
    @if (isDirty) {
      <span class="node-label" [style.background-color]="color">4</span>
    }
    <app-eight class="node" />
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FourComponent extends BaseNodeComponent {
  get isDirty() {
    console.log('4 isDirty', isDirty(this));
    return true;
  }
}
