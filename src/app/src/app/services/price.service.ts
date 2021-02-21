import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getPriceListForItem(itemName:string):Observable<any>{
    return this.http.get(environment.priceListBaseUrl+itemName);
  }

  getCalculatedTotalPrice(horseShoes:number,penguinEars:number):Observable<any>{
    return this.http.post(environment.priceCalcUrl,[horseShoes,penguinEars]);
  }
}
