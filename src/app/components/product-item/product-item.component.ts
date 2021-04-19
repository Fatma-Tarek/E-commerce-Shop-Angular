import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Output() totalMoney = new EventEmitter<number>();
  @Output() counter = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
  }
  addToCard(product)
   {
    //  if(product.num <= product.Quantity)
    //  {
    //   product.num +=1 ;
    //   console.warn(product);
    //   let itemsCart:any[];
    //   itemsCart = JSON.parse(localStorage.getItem('localCart'));
    //   console.warn(itemsCart);
    //   if(itemsCart == null)
    //   {
    //     let storeDataGet:any = [];
    //     storeDataGet.push(product);
    //     localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    //   }
    //   else{

    //     console.warn("length>1");
    //     itemsCart.push(product);
    //     localStorage.setItem('localCart',JSON.stringify(itemsCart));
    //   }
    //   let sum=0;
    //   JSON.parse(localStorage.getItem('localCart')).forEach(a =>  sum+=Number(a.Price));
    //   console.warn(sum);
    //   this.totalMoney.emit(sum);
    //   sum=0;
    //   JSON.parse(localStorage.getItem('localCart')).forEach(a =>  sum+=Number(a.num));
    //   this.counter.emit(sum);
    //  }
    console.log(product);
    if(product.num <= product.Quantity)
    {

      console.warn(product);
     let itemsCart:any[];
      itemsCart = JSON.parse(localStorage.getItem('localCart'));
      console.warn(itemsCart);
      let sumprice=0;
      let sumnum=0;
      if(itemsCart == null)
      {
        product.num +=1 ;
        sumprice=product.Price;
        sumnum=product.num;
        let storeDataGet:any = [];
        storeDataGet.push(product);
        localStorage.setItem('localCart',JSON.stringify(storeDataGet));
      }
      else{
         let flag=0;
         itemsCart.forEach(a =>  {
          if(a.ProductId==product.ProductId)
          {
            flag=1;
            a.num+=1;
            localStorage.setItem('localCart',JSON.stringify(itemsCart));
          }
          // sumprice+=Number(a.Price * a.num);
          // sumnum+=Number(a.num);
          // console.log("pppppppppppppp");
          // console.log(a);
          // console.log( a.num,"----",sumnum);
         });
         if(flag==0)
         {
          product.num=1;
          itemsCart.push(product);
          localStorage.setItem('localCart',JSON.stringify(itemsCart));
         }
         JSON.parse(localStorage.getItem('localCart')).forEach(a =>  {
          sumprice+=Number(a.Price * a.num);
          sumnum+=Number(a.num);
        });
      }
      this.totalMoney.emit(sumprice);
      this.counter.emit(sumnum);

    }

  }

}
