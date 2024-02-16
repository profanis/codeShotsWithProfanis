import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseNodeComponent } from './base-node.component';

@Component({
  selector: 'app-nine',
  standalone: true,
  imports: [],
  template: `
    <span class="node-label" [style.background-color]="color">9</span>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NineComponent extends BaseNodeComponent {}
