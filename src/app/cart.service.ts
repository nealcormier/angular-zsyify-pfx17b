import { Product } from './products';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  addToCart() {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
