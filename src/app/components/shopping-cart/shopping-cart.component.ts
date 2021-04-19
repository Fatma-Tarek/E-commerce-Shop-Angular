import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  selectedproducts: any[];
  // status: boolean;
  // total: number;
  constructor() { }

  ngOnInit(): void {
    this.loadCart();
    // this.selectedproducts = JSON.parse(localStorage.getItem('localCart'));
    // this.total = 0;
    // for(let selectedproduct of this.selectedproducts){
    //   this.total = this.total + (selectedproduct.Price * selectedproduct.Quantity);
    // }
    // // this.status = false;
    // console.log(this.selectedproducts);
  }

  Delete(index) {
    this.selectedproducts.splice(index,1);
    localStorage.setItem('localCart',JSON.stringify(this.selectedproducts));
  }

  Save(index) {
    localStorage.setItem('localCart',JSON.stringify( this.selectedproducts));
  }

  Checkout(index) {
    // this.status = true;
  }

  Delete_All() {
    this.selectedproducts = [];
    localStorage.clear();
    this.total = 0;

  }

    incQnt(ProductId,num, Quantity ){
    for(let i=0; 
    i<this.selectedproducts.length;
    i++){
    if
    (this.selectedproducts[i].ProductId 
      === ProductId){
    if(num < this.selectedproducts[i].Quantity)
    this.selectedproducts[i].num
     = parseInt(num) + 1;
    }
    }

    
    
    localStorage.setItem
    ('localCart', 
    JSON.stringify
    (this.selectedproducts));
     this.loadCart();
    }
    
    decQnt(ProductId,num ){
    for
    (let i=0; 
    i<this.selectedproducts.length;
     i++){
    if
    (this.selectedproducts[i].ProductId
      === ProductId){
    if(num!= 1)
    this.selectedproducts[i].num
    = parseInt(num) - 1;
    }
    }
    localStorage.setItem
    ('localCart', 
    JSON.stringify
    (this.selectedproducts));
     this.loadCart();
    }

    total:number = 0;
    loadCart(){
    if(localStorage.getItem('localCart')){
    this.selectedproducts = JSON.parse(localStorage.getItem('localCart'));
    this.total = this.selectedproducts.reduce(function(acc, val){
return acc + (val.Price * val.Quantity);
    }, 0);
     }
     }
     }

