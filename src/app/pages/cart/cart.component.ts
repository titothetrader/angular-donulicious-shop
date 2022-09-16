import { Component, OnInit } from '@angular/core';
import { DonutDetails } from 'src/app/interfaces/donut-details';
import { ManageCartService } from 'src/app/services/manage-cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: DonutDetails[] = [];
  totalCalories: number = 0;
  totalPrice: number = 0;

  constructor(private manageCart: ManageCartService) {}

  ngOnInit(): void {
    this.cart = this.manageCart.getCart();
    this.calculateCartTotal();
  }

  removeFromCart(id: number): void {
    this.manageCart.deleteFromCart(id);
    this.cart = this.manageCart.getCart();
    this.calculateCartTotal();
  }

  private calculateCartTotal(): void {
    this.totalCalories = 0;
    this.totalPrice = 0;

    this.cart.forEach((donut) => {
      this.totalCalories += donut.calories;
      this.totalPrice = this.cart.length;
    });
  }
}
