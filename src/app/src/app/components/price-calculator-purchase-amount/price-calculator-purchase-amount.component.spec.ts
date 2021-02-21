import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculatorPurchaseAmountComponent } from './price-calculator-purchase-amount.component';

describe('PriceCalculatorPurchaseAmountComponent', () => {
  let component: PriceCalculatorPurchaseAmountComponent;
  let fixture: ComponentFixture<PriceCalculatorPurchaseAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCalculatorPurchaseAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCalculatorPurchaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
