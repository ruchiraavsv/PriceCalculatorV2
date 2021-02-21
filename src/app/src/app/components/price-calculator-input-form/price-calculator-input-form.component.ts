import { Component,Output, EventEmitter } from '@angular/core';
import { PriceService } from '../../services/price.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationText } from '../../constants/notification-texts';

@Component({
  selector: 'app-price-calculator-input-form',
  templateUrl: './price-calculator-input-form.component.html',
  styleUrls: ['./price-calculator-input-form.component.scss']
})
export class PriceCalculatorInputFormComponent{

  @Output() purchaseAmountUpdateEvent = new EventEmitter<number>();

  penguinEarUnits:number;
  horseShoeUnits:number;
  penguinEarCartons:number;
  horseShoeCartons:number;

  constructor(private priceService:PriceService,private toastr: ToastrService) { }

  calculatePrice(){
    this.priceService.getCalculatedTotalPrice(this.horseShoeUnits,this.horseShoeCartons,this.penguinEarUnits,this.penguinEarCartons).subscribe(price=>{
      this.purchaseAmountUpdateEvent.emit(price);
    },
    error=>{
      this.toastr.error(NotificationText.SERVER_ERROR, 'Error');
    }
    );

  }

}
