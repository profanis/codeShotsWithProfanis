import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `Dashboard Component`,
})
export default class DashboardComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        console.log(value);
      });
  }
}
