import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { PriceService } from '../../services/price.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationText } from '../../constants/notification-texts';
import { ItemName } from '../../constants/item-names';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})


export class PriceListComponent implements OnInit {

  items:Item[];
  
  constructor(private priceService:PriceService,private toastr: ToastrService) {this.items=[];}

  ngOnInit() {
    this.setItemSelected(ItemName.PENGUIN_EAR);
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
    },
    error=>{
      this.toastr.error(NotificationText.SERVER_ERROR, 'Error');
    }
    );
  }

}
