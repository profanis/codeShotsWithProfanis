import { AfterViewInit, Directive, inject } from '@angular/core';
import { AutoScrollService } from '../services/auto-scroll.service';

@Directive({
  selector: '[restoreScrollPosition]',
  standalone: true,
})
export class RestoreScrollPositionDirective implements AfterViewInit {
  autoScrollService = inject(AutoScrollService);

  ngAfterViewInit(): void {
    this.autoScrollService.shouldScroll.next(true);
  }
}
