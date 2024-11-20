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
  styleUrls: ['./cart-items.component.css'] // Corrected styleUrls
})
export class CartItemsComponent implements OnInit {
<<<<<<< HEAD
  cartItems: any[] = [];
  totalCart: number = 0;
=======
  data: any;
  totalCart:number = 0;
>>>>>>> 1113dd87c1cde933116c2c593544a53e8dcbb1a8

  constructor(private info: ProductsService, private router: Router) {}

  ngOnInit(): void {
<<<<<<< HEAD
    const storedOrderDetails = localStorage.getItem('orderDetails');
    
    if (storedOrderDetails) {
      this.cartItems = JSON.parse(storedOrderDetails);
      this.calculateTotal();
    } else {
      this.cartItems = [];
    }
=======
    this.data = this.info.products;
    this.data.map((element:any) => element.disc ? (this.totalCart+=element.quantity*element.priceAfterDisc) : (this.totalCart+=element.quantity*element.price));
>>>>>>> 1113dd87c1cde933116c2c593544a53e8dcbb1a8
  }

  calculateTotal(): void {
    this.totalCart = 0;
    this.cartItems.forEach((item: any) => {
      if (item.disc) {
        this.totalCart += item.quantity * item.priceAfterDisc;
      } else {
        this.totalCart += item.quantity * item.price;
      }
    });
  }

  removeFromCart(itemId: any): void {
    const index = this.cartItems.findIndex((item: any) => item.id === itemId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('orderDetails', JSON.stringify(this.cartItems)); 
      this.calculateTotal();
    }
  }

  checkout(): void {
    Swal.fire({
      title: 'Order Confirmation',
      text: 'Order 6546842286 has been confirmed',
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: false,
      timer: 1500
    }).then(()=>localStorage.clear()).then(() => this.router.navigate(['/'])); 
  }
}
