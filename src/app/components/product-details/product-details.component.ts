import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import {Product} from '../../models/product.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private _routeParamsSub:Subscription;
  product:Product;

  constructor(private _route:ActivatedRoute,
              private _service: ServiceService) { }

  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap=>{
      if (paramMap.has('id')){
        this._service.getProductById(paramMap.get('id')).subscribe((res:any)=>{
          this.product=res.data;
          console.log(this.product);

        });
      }

    });
  }

  ngOnDestroy():void{
    this._routeParamsSub.unsubscribe();
  }
  onSubmit(form: NgForm){
    
  }
}
