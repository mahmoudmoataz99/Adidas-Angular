import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import data from '../products.json';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    NgIf, NgClass, NgFor,
    RouterLink, RouterLinkActive,
    ReactiveFormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  products?: Array<any>;
  allGenders?: Array<any>;
  genders?: Array<string>;
  genderSearch: string | null = null;
  searchForm: any;
  cartItems?:any;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.products = data.items;
    this.cartItems = this.products.length;
    this.allGenders = this.products.filter(
      (item) => item.gender !== 'Unisex'
    );
    this.genders = [...new Set(this.allGenders.map((item) => item.gender))];

    this.searchForm = this.formBuilder.group({searchItem: ['', Validators.required],});
  }

  navigate = () => this.genderSearch && this.router.navigate(['/category', this.genderSearch]);

  searchFunc = () => this.searchForm.valid ? (this.router.navigate(['/search',this.searchForm.value.searchItem]),this.searchForm.reset()) : alert('Type anything to search for');
}