import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculatorInputFormComponent } from './price-calculator-input-form.component';

describe('PriceCalculatorInputFormComponent', () => {
  let component: PriceCalculatorInputFormComponent;
  let fixture: ComponentFixture<PriceCalculatorInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCalculatorInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCalculatorInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
