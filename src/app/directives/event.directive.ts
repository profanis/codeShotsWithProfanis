import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appEvent]',
  standalone: true,
})
export class EventDirective {
  private readonly domain = 'this.is.my-domain';
  data: any;
  constructor(private http: HttpClient, private ngZone: NgZone) {}

  @HostListener('click')
  onCLick() {
    if (!this.data) {
      throw new Error('Please define the data');
    }

    this.ngZone.runOutsideAngular(() => {
      this.http
        .post(this.domain, {
          user: 'me',
          data: this.data,
        })
        .pipe(take(1))
        .subscribe();
    });
  }
}
