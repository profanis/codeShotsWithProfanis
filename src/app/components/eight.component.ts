import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseNodeComponent } from './base-node.component';

@Component({
  selector: 'app-eight',
  standalone: true,
  imports: [],
  template: `
    <span class="node-label" [style.background-color]="color">8</span>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EightComponent extends BaseNodeComponent {}
