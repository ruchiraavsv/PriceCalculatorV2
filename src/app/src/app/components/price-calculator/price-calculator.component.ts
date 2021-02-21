import { Component} from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent{

  purchaseAmount:number=0;

  updatePurchaseAmount(value:number){
    this.purchaseAmount=value;
  }

}
