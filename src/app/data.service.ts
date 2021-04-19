import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
private name = new BehaviorSubject<string>("Default Data");
public share = this.name.asObservable();
  constructor() { }
  updateData(text){
    this.name.next(text);
  }
}
