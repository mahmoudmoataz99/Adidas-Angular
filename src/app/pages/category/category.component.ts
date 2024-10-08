import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { SingleItemComponent } from '../../single-item/single-item.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SingleItemComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  gender: string | null = null;
  products?: Array<any>;

  constructor(private route: ActivatedRoute, private info: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.gender = params.get('category');
      this.products = this.gender == 'Kids' ? 
      this.info.products?.filter((product) => product.gender == this.gender) : this.info.products?.filter((product) => product.gender == this.gender || product.gender == 'Unisex');
    });
  }
}