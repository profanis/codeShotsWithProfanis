import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  #counterBs = new BehaviorSubject<number>(0);
  #counter = signal(0);

  counter$ = this.#counterBs.asObservable();
  counter = this.#counter.asReadonly();

  increaseCounter() {
    this.#counterBs.next(this.#counterBs.value + 1);
    this.#counter.update(() => this.#counter() + 1);
  }

  decreaseCounter() {
    this.#counterBs.next(this.#counterBs.value - 1);
    this.#counter.update(() => this.#counter() - 1);
  }
}
