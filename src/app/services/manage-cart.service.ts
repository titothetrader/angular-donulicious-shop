import { Injectable } from '@angular/core';
import { DonutDetails } from '../interfaces/donut-details';

@Injectable({
  providedIn: 'root',
})
export class ManageCartService {
  cart: DonutDetails[] = [];

  constructor() {}

  getCart(): DonutDetails[] {
    return this.cart;
  }

  addToCart(donut: DonutDetails): void {
    this.cart.push(donut);
  }

  deleteFromCart(id: number): void {
    this.cart.splice(id, 1);
  }
}
