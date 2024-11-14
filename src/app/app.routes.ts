import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';
import { ErrorComponent } from './pages/error/error.component';
import { CartItemsComponent } from './pages/cart-items/cart-items.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cat/:category', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  {path:'search/:q',component:SearchComponent},
  {path:'cart',component:CartItemsComponent},
  {path:'**',component:ErrorComponent},
];
