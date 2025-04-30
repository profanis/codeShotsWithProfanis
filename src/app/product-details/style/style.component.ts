import { Component, inject, Signal } from '@angular/core';
import { ActivatedRoute, ROUTER_OUTLET_DATA } from '@angular/router';
import {
  ACTIVATED_PRODUCT,
  ACTIVATED_PRODUCT_DETAILS,
} from '../product-details.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-style',
  imports: [JsonPipe],
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss',
})
export class StyleComponent {
  activatedProduct = inject(ACTIVATED_PRODUCT_DETAILS).productResource;
}
