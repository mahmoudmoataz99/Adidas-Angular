import { CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, CurrencyPipe, JsonPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  item?: any;
  productId: any | null = null;

  constructor(private route: ActivatedRoute, private info: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => ((this.productId = params.get('id')),
        (this.item = this.info.products?.filter((index) => index.id == this.productId))
      )
    );
  }
}