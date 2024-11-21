import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule, RouterLink, CurrencyPipe],
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})

export class CartItemsComponent implements OnInit {
  cartItems: any[] = [];
  totalCart: number = 0;
  data: any;

  constructor(private info: ProductsService, private router: Router) {}

  ngOnInit(): void {
    const storedOrderDetails = localStorage.getItem('orderDetails');
    if (storedOrderDetails) {
      this.cartItems = JSON.parse(storedOrderDetails);
      this.calculateTotal();
    } else {
      this.cartItems = [];
    }
  }

  calculateTotal(): void {
    this.totalCart = 0;
    this.cartItems.forEach((item: any) => {
      item.disc ? this.totalCart += item.quantity * item.priceAfterDisc : this.totalCart += item.quantity * item.price;
    });
  }

  removeFromCart(itemId: any): void {
    const index = this.cartItems.findIndex((item: any) => item.id === itemId);
    this.cartItems.splice(index, 1);
    localStorage.setItem('orderDetails', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

  increment(itemId: any): void {
    const item = this.cartItems.find((item: any) => item.id === itemId);
    item.quantity++;
    localStorage.setItem('orderDetails', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

  decrement(itemId: any): void {
    const item = this.cartItems.find((item: any) => item.id === itemId);
    if (item && item.quantity > 1) { 
      item.quantity--;
      localStorage.setItem('orderDetails', JSON.stringify(this.cartItems));
      this.calculateTotal();
    }
  }

  checkout () {
     Swal.fire({
        title: 'Order Confirmation',
        text: 'Order 6546842286 has been confirmed',
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false,
        timer: 1500
      }
    ).then(() => localStorage.clear()
    ).then(() => this.router.navigate(['/']));
  }
}