import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component'

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  } ,
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  {
    path:'cart',
    component:ShoppingCartComponent
  },
  {
    path:'products/all',
    component:FilterProductComponent
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent
  },

  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
