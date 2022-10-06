import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(public basketService: BasketService) {}

  ngOnInit(): void {}

  buyAll() {
    console.log('buy all');
  }

  clearAll() {
    console.log('clear all');
  }
}
