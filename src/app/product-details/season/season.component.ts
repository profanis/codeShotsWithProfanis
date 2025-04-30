import { JsonPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { ActivatedRoute, ROUTER_OUTLET_DATA } from '@angular/router';

@Component({
  selector: 'app-season',
  imports: [JsonPipe],
  templateUrl: './season.component.html',
  styleUrl: './season.component.scss',
})
export class SeasonComponent {
  product = inject(ActivatedRoute).parent?.snapshot.data.product;
}
