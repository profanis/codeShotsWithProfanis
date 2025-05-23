import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsState } from 'src/app/product.state';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  imports: [JsonPipe],
})
export class SaleComponent {
  private productsState = inject(ProductsState);
  product = this.productsState.product;
}
