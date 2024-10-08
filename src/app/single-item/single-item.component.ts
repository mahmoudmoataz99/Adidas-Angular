import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-item',
  standalone: true,
  imports: [NgIf, NgClass, CurrencyPipe,RouterLink],
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.css',
})
export class SingleItemComponent {
  @Input() product?: any;
  single: any;
  id?: number;
  constructor() {
    this.single = this.product;
  }
}
