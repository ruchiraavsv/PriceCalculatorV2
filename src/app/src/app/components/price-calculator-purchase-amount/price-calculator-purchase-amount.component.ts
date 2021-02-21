import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-calculator-purchase-amount',
  templateUrl: './price-calculator-purchase-amount.component.html',
  styleUrls: ['./price-calculator-purchase-amount.component.scss']
})
export class PriceCalculatorPurchaseAmountComponent implements OnInit {


  @Input() purchaseAmount:number;

  constructor() { }

  ngOnInit() {
  }

}
