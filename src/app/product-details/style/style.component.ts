import { Component, inject, Signal } from '@angular/core';
import { ActivatedRoute, ROUTER_OUTLET_DATA } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { PRODUCT } from '../product-details.component'
@Component({
  selector: 'app-style',
  imports: [JsonPipe],
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss',
})
export class StyleComponent {
  product = inject(PRODUCT);
}
