import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private _http:HttpClient) { }
  sendEmail(email: any){
    return this._http.post(`${environment.contact_baseUrl}`,email); //course is the body of post req
   //return this._http.post(`${environment.contact_baseUrl}`,{ 'email':"gho" ,'message':"gh",'name': "gg",'subject': "gg"}) 
  }
}
