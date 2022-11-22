import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EventDirective } from 'src/app/directives/event.directive';
import { MouseenterDirective } from 'src/app/directives/mouseenter.directive';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>tester works!</p> `,
  styles: [],
  hostDirectives: [MouseenterDirective, EventDirective],
})
export class TesterComponent implements OnInit {
  eventDirective = inject(EventDirective);

  ngOnInit(): void {
    this.eventDirective.data = {
      propertyOne: 'foo',
      propertyTwo: 'foo 2',
    };
  }
}
