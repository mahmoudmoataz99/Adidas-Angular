import { Injectable } from '@angular/core';
import data from '../products.json'; 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products?:Array<any>;
  constructor( ) {this.products = data.items;}
  
}