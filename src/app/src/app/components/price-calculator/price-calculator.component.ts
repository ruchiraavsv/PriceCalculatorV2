import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent implements OnInit {


  purchaseAmount:number=0;

  constructor() { }

  ngOnInit() {
  }

  updatePurchaseAmount(value:number){
    this.purchaseAmount=value;
  }

}
