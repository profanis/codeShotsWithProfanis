import { ViewportScroller } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, Scroll } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutoScrollService {
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);
  private destroyRef = inject(DestroyRef);

  shouldScroll = new BehaviorSubject<boolean>(false);
  private readonly shouldScroll$ = this.shouldScroll.asObservable();

  constructor() {
    this.init();
  }

  init() {
    const position$ = this.router.events.pipe(
      filter((event: any) => event instanceof Scroll),
      map((event: Scroll) => event.position)
    );

    position$
      .pipe(
        switchMap((position) =>
          this.shouldScroll$.pipe(
            filter(Boolean),
            map(() => position)
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (position) => {
          this.viewportScroller.scrollToPosition(position || [0, 0]);
        },
      });
  }
}
