import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseNodeComponent } from './base-node.component';
import { ElevenComponent } from './eleven.component';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [ElevenComponent],
  template: `
    <span class="node-label" [style.background-color]="color">6</span>
    <app-eleven class="node" />
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SixComponent extends BaseNodeComponent {}
