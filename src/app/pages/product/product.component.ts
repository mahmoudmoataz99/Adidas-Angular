import { CurrencyPipe, JsonPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, CurrencyPipe, JsonPipe, MatIconModule, NgClass, NgStyle, NgFor],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], // Corrected the property from styleUrl to styleUrls
})
export class ProductComponent implements OnInit {
  item?: any;
  productId: any | null = null;
  quantity: number = 0;
  selectedColor?: string; // To hold the selected color
  selectedSize?: string; // To hold the selected size
  orderDetails: Array<any> = [];

  constructor(private route: ActivatedRoute, private info: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.item = this.info.products?.filter((index) => index.id == this.productId);
    });
  }

  increment = () => this.quantity++;

  decrement = () => this.quantity > 0 ? this.quantity-- : (this.quantity = 0);

  selectColor = (color: string) => this.selectedColor = color; 
  
  selectSize = (size: string) => this.selectedSize = size; 
  
  addToCart() {
    if (this.selectedSize && this.selectedColor != null && this.quantity != 0){
      this.orderDetails.push({
        "id": this.productId,
        "size": this.selectedSize,
        "color": this.selectedColor,
        "quantity": this.quantity,
      });
      console.log(this.orderDetails);
      Swal.fire({
        title: 'Success',
        text: 'Item added to cart',
        icon: 'success',
        showCloseButton:true,
        showConfirmButton:false,
        timer:1000
      }).then(()=>{
      this.selectedSize = '';
      this.selectedColor = '';
      this.quantity = 0;
      });
    }else{
      Swal.fire({
        title: 'failed',
        text: 'Item not added to cart',
        icon: 'error',
        showCloseButton:true,
        showConfirmButton:false,
        timer:1000
      });
    }
  }
}