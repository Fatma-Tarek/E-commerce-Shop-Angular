import { DataService } from './../../data.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.model';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, interval, merge, fromEvent } from 'rxjs';
import { HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import * as _ from 'lodash';
import {  Input, Output, EventEmitter } from '@angular/core';
import { retry, retryWhen, delayWhen, scan } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { Pipe, PipeTransform } from "@angular/core";




@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})

export class FilterProductComponent implements OnInit {
    product: Product[];
    filterProducts: Product[];
    flag: boolean;
    name: string;
    text: any;
    constructor(private _productService : ProductsService,
      private data: DataService
      ) {
     }

     getData(i: number,name){
      this._productService.getProducts(i).subscribe((res:any)=>{
        for(let  y=0; y<res.limit;y++){
          this.product.push(res.data[y]); 
        }
        if(i<13){
        this.getData(i+1,name);  
        }
        if(i==13){
          console.warn(this.product);
          console.log(name);
          this.searchByName(name);
        }

      });
  }
  
    ngOnInit() {
        
         this.data.share.subscribe( x => this.name= x);
         console.log(this.name);
         this._productService.getProducts(1).subscribe((res:any)=>{
          this.product=res.data;    
      this.getData(2,this.name);
     
      });

    }
    searchByName(name: string){
      this.flag= false;
      this.filterProducts= [];
      for(let y=0;y<122;y++){
        if(this.product[y].Name.includes(name))
        {
            this.filterProducts.push(this.product[y]); 
        }
      }
      console.warn(this.filterProducts);
    }

 
}
