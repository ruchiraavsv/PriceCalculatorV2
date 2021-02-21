import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getPriceListForItem(itemName:string):Observable<any>{
    return this.http.get(environment.priceListBaseUrl+itemName);
  }

  getCalculatedTotalPrice(horseShoeUnits:number,horseShoeCartons:number,penguinEarUnits:number,penguinEarCartons:number):Observable<any>{
    return this.http.post(environment.priceCalcUrl,
      {
        'horseShoeUnits':horseShoeUnits,
        'horseShoeCartons':horseShoeCartons,
        'penguinEarUnits':penguinEarUnits,
        'penguinEarCartons':penguinEarCartons
    });
  }
}
