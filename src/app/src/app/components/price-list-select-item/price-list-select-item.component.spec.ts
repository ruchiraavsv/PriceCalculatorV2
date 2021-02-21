import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListSelectItemComponent } from './price-list-select-item.component';

describe('PriceListSelectItemComponent', () => {
  let component: PriceListSelectItemComponent;
  let fixture: ComponentFixture<PriceListSelectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListSelectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
