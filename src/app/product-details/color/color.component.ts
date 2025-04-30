import { JsonPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { Product } from 'src/app/db';

@Component({
  selector: 'app-color',
  imports: [JsonPipe],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss',
})
export class ColorComponent {
  product = inject(ROUTER_OUTLET_DATA) as Signal<Product>;
}
