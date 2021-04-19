import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../interfaces/product.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private _routeParamsSub: Subscription;
  product: Product;

  constructor(private _route: ActivatedRoute,
    private _service: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._service.getProductById(paramMap.get('id')).subscribe((res: any) => {
          this.product = res.data;
        });
      }

    });
  }

  ngOnDestroy(): void {
    this._routeParamsSub.unsubscribe();
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      let flag=0;
      let storageProds: any[];
      storageProds = JSON.parse(localStorage.getItem('localCart'));
      storageProds.forEach(prod => {
        if (prod.ProductId == this.product.ProductId) {
          flag=1;
          prod.num += form.value.quantity;
        }
        localStorage.setItem('localCart', JSON.stringify(storageProds));
      });
      if(flag==0){
        this.product.num = form.value.quantity;
        console.log(form.value.quantity);
          storageProds.push(this.product);
          localStorage.setItem('localCart', JSON.stringify(storageProds));
      }
      setTimeout(() => {
        this.router.navigate(['cart']);
    }, 2000);  
    }
  }

}
