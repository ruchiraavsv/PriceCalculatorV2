import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price-calculator-input-form',
  templateUrl: './price-calculator-input-form.component.html',
  styleUrls: ['./price-calculator-input-form.component.scss']
})
export class PriceCalculatorInputFormComponent implements OnInit {

  
  @Output() purchaseAmountUpdateEvent = new EventEmitter<number>();

  penguinEars:number=0;
  horseShoes:number=0;

  constructor(private priceService:PriceService) { }

  ngOnInit() {
  }

  calculatePrice(){
    this.priceService.getCalculatedTotalPrice(this.horseShoes,this.penguinEars).subscribe(price=>{
      this.purchaseAmountUpdateEvent.emit(price);
    });

  }

}
