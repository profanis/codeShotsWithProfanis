import { CommonModule } from '@angular/common';
import {
  afterRender,
  afterRenderEffect,
  ApplicationRef,
  Component,
  effect,
  ElementRef,
  inject,
  NgZone,
  signal,
  viewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
  boxes = viewChildren('box', { read: ElementRef });
  counter = signal(0);

  constructor() {
    // effect(() => {
    //   this.forceLayoutThrashing();
    // });

    afterRenderEffect({
      write: () => {
        for (let i = 0; i < 100; i++) {
          this.boxes().forEach((box) => {
            box.nativeElement.style.width = Math.random() * 200 + 'px';
          });
        }
      },
      read: () => {
        for (let i = 0; i < 100; i++) {
          this.boxes()!.forEach((box) => {
            const width = box.nativeElement.offsetWidth; // This forces layout!
            console.log(width);
          });
        }
      },
    });
  }

  // forceLayoutThrashing() {
  //   // Force layout thrashing:
  //   for (let i = 0; i < 100; i++) {
  //     this.boxes()!.forEach((box) => {
  //       box.nativeElement.style.width = Math.random() * 200 + 'px';
  //       // read a style that depends on new layout changes
  //       const width = box.nativeElement.offsetWidth; // This forces layout!
  //       console.log(width);
  //     });
  //   }
  // }
}
