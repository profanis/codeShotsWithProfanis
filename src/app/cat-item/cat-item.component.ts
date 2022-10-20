import {
  CommonModule,
  ImageLoaderConfig,
  IMAGE_LOADER,
  NgOptimizedImage,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { CatModel } from '../types/cat.model';

@Component({
  selector: 'app-cat-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn2.thecatapi.com/images/${config.src}`;
      },
    },
  ],
  template: `
    <img
      [ngSrc]="catItem.url"
      [width]="catItem.width"
      [height]="catItem.height"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget eros
      eleifend, pellentesque tellus id, porttitor libero. Donec maximus semper
      est, et pretium erat suscipit ut. Quisque scelerisque diam sed neque
      interdum bibendum. Maecenas eu mollis eros, ac porttitor risus. Donec
      placerat ac justo quis porttitor. In bibendum sit amet urna at malesuada.
      Nullam quis diam nec justo congue vestibulum eu et orci. Quisque eu leo
      fringilla, gravida tellus gravida, pretium velit. Aliquam bibendum, metus
      ac luctus lacinia, lacus diam efficitur diam, at viverra erat urna eu
      libero. Mauris ut orci cursus nulla pharetra aliquam. Sed vestibulum eros
      eu sapien vehicula egestas. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam tempus convallis auctor.
    </p>
    <p>
      Morbi dolor arcu, tincidunt non est at, tincidunt pulvinar metus. Praesent
      dolor urna, cursus nec vestibulum sit amet, eleifend eget orci. Curabitur
      vel sagittis dolor. Praesent eleifend metus ac libero hendrerit, quis
      luctus purus laoreet. Vestibulum non lectus massa. Sed interdum venenatis
      ultrices. Nullam eu est suscipit sapien sodales faucibus eu nec mi. Morbi
      vel rutrum metus, vel sodales ipsum. Mauris leo ante, blandit eget
      faucibus at, facilisis ut orci. Nunc viverra mi eget hendrerit lobortis.
      Suspendisse finibus, justo in faucibus molestie, urna massa elementum
      turpis, in eleifend sem turpis eu elit. Vestibulum tempus purus eros, eget
      pellentesque massa sodales vitae. Sed urna quam, fringilla sollicitudin
      feugiat quis, ullamcorper vel ligula.
    </p>
  `,
  styleUrls: ['./cat-item.component.scss'],
})
export class CatItemComponent {
  @Input() catItem!: CatModel;
}
