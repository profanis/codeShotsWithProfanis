import { Component } from '@angular/core';
import { randomColor } from '../utils';

@Component({
  selector: 'app-base-node',
  standalone: true,
  template: ``,
})
export class BaseNodeComponent {
  get color() {
    return randomColor();
  }
}
