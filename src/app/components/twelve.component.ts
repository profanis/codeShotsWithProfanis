import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseNodeComponent } from 'src/app/components/base-node.component';

@Component({
  selector: 'app-twelve',
  standalone: true,
  imports: [],
  template: `
    <span class="node-label" [style.background-color]="color">12</span>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TwelveComponent extends BaseNodeComponent {}
