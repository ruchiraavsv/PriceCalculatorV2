import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})


export class PriceListComponent implements OnInit {

  items:Item[];
  
  constructor(private priceService:PriceService) {this.items=[];}

  ngOnInit() {
    this.setItemSelected("penguinEar");
  }

  setItemSelected(itemName:string){
    let counter=1;
    this.priceService.getPriceListForItem(itemName).subscribe((prices:string[])=>{
      let tempItems=[];
      prices.forEach(priceVal=>{
        tempItems.push({
          name:itemName,
          units: counter,
          price:Number(priceVal),
        });
        counter++;
      })
      this.items=tempItems;
    }
    );
  }

}
