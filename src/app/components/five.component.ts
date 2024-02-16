import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseNodeComponent } from './base-node.component';
import { NineComponent } from './nine.component';
import { TenComponent } from './ten.component';

@Component({
  selector: 'app-five',
  standalone: true,
  imports: [TenComponent, NineComponent],
  template: `
    <span class="node-label" [style.background-color]="color">5</span>

    <app-nine class="node" />

    <app-ten class="node" />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiveComponent extends BaseNodeComponent {}
