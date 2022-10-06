import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../types';
import { BasketComponent } from '../basket/basket.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, BasketComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @ViewChildren(ProductCardComponent) productCards:
    | QueryList<ProductCardComponent>
    | undefined;

  products: Product[] = [
    {
      id: 1,
      title: 'something',
      subTitle: 'product a sub',
      price: 120,
      description: 'product a desc',
    },
    {
      id: 2,
      title: 'Product B',
      subTitle: 'product b sub',
      price: 120,
      description: 'product b desc',
    },
    {
      id: 3,
      title: 'Product C',
      subTitle: 'product c sub',
      price: 120,
      description: 'product c desc',
    },
  ];

  myDecreaseHandler(product: Product) {
    if (this.productCards) {
      const foundProduct = this.productCards.find(
        (it) => it.product?.id === product.id
      );
      console.log('decrease', foundProduct?.count);
    }
  }

  myIncreaseHandler(product: Product) {
    if (this.productCards) {
      const foundProduct = this.productCards.find(
        (it) => it.product?.id === product.id
      );
      console.log('increase', foundProduct?.count);
    }
  }
}
