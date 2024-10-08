import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SingleItemComponent } from '../../single-item/single-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SingleItemComponent,NgIf,NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  search: string | null = null;
  products?: Array<any>;
  
  constructor(private route: ActivatedRoute, private info: ProductsService) {
    this.products = this.info.products;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => (this.search = params.get('q')));
  }
}
