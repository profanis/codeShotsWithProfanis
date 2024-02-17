import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseNodeComponent } from './base-node.component';
import { EightComponent } from './eight.component';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [EightComponent],
  template: `
    <span class="node-label" [style.background-color]="color">4</span>

    <app-eight class="node" />
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FourComponent extends BaseNodeComponent {}
