import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SingleItemComponent } from '../single-item/single-item.component';
import { NgIf } from '@angular/common';
import data from '../products.json';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CurrencyPipe, NgIf, SingleItemComponent],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
})
export class NewArrivalsComponent implements OnInit {
  showMore: boolean = true;
  items: any[] = [];

  ngOnInit(): void {
    this.items = data.items.slice(0, 4);
  }

  viewAll() {
    this.showMore = !this.showMore;
    this.showMore
      ? (this.items = data.items.slice(0, 4))
      : (this.items = data.items);
  }
}
