import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  getProducts(page = 1){
    return this._http.get(`${environment.productUrl}/products?page=${page}`)
  }
}
