import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-calculator-purchase-amount',
  templateUrl: './price-calculator-purchase-amount.component.html',
  styleUrls: ['./price-calculator-purchase-amount.component.scss']
})
export class PriceCalculatorPurchaseAmountComponent {

  @Input() purchaseAmount:number;

}
