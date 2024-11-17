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
  imports: [NgIf,NgFor,MatIconModule,RouterLink,CurrencyPipe],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})

export class CartItemsComponent implements OnInit {
  data: any;
  totalCart:number = 0;

  constructor(private info: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.info.products;
    this.data.map((element:any) => element.disc ? (this.totalCart+=element.quantity*element.priceAfterDisc) : (this.totalCart+=element.quantity*element.price));
  }

  deleteItem(id: any) {
    const x = this.data.findIndex((per: any) => per.id === id),
    name = this.data.find((ind: any) => ind.id === id)?.name;
    this.data.splice(x, 1);
  
    Swal.fire({
      title: 'Deleted',
      text: `${name} is removed from cart`,
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: false,
      timer: 1000
      });
  }
  

  checkout() {
    Swal.fire({
      title: 'Order Confirmation',
      text: 'Order 664178915 is confirmed',
      icon: 'success',
      showCloseButton: true,showConfirmButton: false,timer: 1500
    }).then(() => this.router.navigate(['/']));
  }
}
