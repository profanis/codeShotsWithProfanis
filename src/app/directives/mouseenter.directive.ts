import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[appMouseenter]',
  standalone: true,
  hostDirectives: [
    {
      directive: BoldDirective,
      outputs: ['hover:boldHover'],
    },
    {
      directive: UnderlineDirective,
      inputs: ['color:underlineColor'],
    },
  ],
})
export class MouseenterDirective {
  constructor() {}
}
