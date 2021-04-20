import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  products:Product[];
  NumPages;
  currentPage: number;
  sum:any;
  counter:any;
  searchTerm: string;
  text: '  ';
 // counter=JSON.parse(localStorage.getItem('localCart'))==null ? 0: JSON.parse(localStorage.getItem('localCart')).length;
  constructor(private _productServive : ProductsService,  private DataService : DataService) { }

  ngOnInit(): void {
    this.sum=0;
    this.counter=0;
    if(JSON.parse(localStorage.getItem('localCart'))==null){
    this.sum=0;
    this.counter=0;
    }else{
      JSON.parse(localStorage.getItem('localCart')).forEach(a =>  {
        this.sum+=Number(a.Price * a.num);
        this.counter+=Number(a.num);
      });
    }

    console.warn(this.sum);
    this._productServive.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.products=res.data;
      this.products.forEach(product=>{
         product.num=0;
      })
      this.currentPage=Number(res.page);
      this.NumPages= Array(res.total_pages).fill(res.total_pages).map((_, idx) =>idx+1);
      console.log(this.NumPages);
    })

    
  }
  PaginationFunction(page):void{
    this.sum=0;
    this.counter=0;
    if(JSON.parse(localStorage.getItem('localCart'))==null){
    this.sum=0;
    this.counter=0;
    }else{
      JSON.parse(localStorage.getItem('localCart')).forEach(a =>  {
        this.sum+=Number(a.Price * a.num);
        this.counter+=Number(a.num);
      });
    }

    console.warn(this.sum);
    console.log(page);
    this._productServive.getProducts(page).subscribe((res:any)=>{
      console.log(res);
      this.products=res.data;
      this.products.forEach(product=>{
        product.num=0;
     })
      
      this.currentPage=Number(res.page);
      this.NumPages= Array(res.total_pages).fill(res.total_pages).map((_, idx) =>idx+1);
      console.log(this.NumPages);
    })

 }
 getTotalMoney(total:number){
   console.log("here is total",total);
   this.sum=total;
 }
 getCounter(num:number){
   this.counter=num;
 }

 btnClick= function () {
  this.routerLink="/all"
};

updateText(text){
  this.DataService.updateData(text);
}


}

