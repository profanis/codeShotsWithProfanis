import { WritableSignal, signal } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: WritableSignal<Product[]> = signal(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `This is a description for product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
    imageUrl: `https://picsum.photos/id/${i + 1}/200/300`,
    category: 'Electronics',
  }))
);
