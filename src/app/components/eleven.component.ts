import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseNodeComponent } from './base-node.component';

@Component({
  selector: 'app-eleven',
  standalone: true,
  imports: [],
  template: `
    <span class="node-label" [style.background-color]="color">11</span>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElevenComponent extends BaseNodeComponent {}
