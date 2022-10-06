import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BasketService } from 'src/app/basket.service';
import { Product } from 'src/app/types';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  set product(value: Product | undefined) {
    if (value?.title === 'something') {
      value.title = 'something else';
    }
    this._product = value;
  }

  get product() {
    return this._product;
  }

  @Output() increase = new EventEmitter<Product>();
  @Output() decrease = new EventEmitter<Product>();

  count = 0;
  private _product: Product | undefined;

  constructor(private basketService: BasketService) {}

  decreaseHandler() {
    this.count--;
    this.decrease.emit(this.product);
    this.basketService.decrease();
  }

  increaseHandler() {
    this.count++;
    this.increase.emit(this.product);
    this.basketService.increase();
  }
}
