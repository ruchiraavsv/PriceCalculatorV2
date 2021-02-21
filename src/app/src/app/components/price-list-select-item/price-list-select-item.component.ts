import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-price-list-select-item',
  templateUrl: './price-list-select-item.component.html',
  styleUrls: ['./price-list-select-item.component.scss']
})
export class PriceListSelectItemComponent implements OnInit {

  selectedValue: string;
 
  items: Item[] = [
    {value: 'penguinEar', viewValue: 'PenguinEar'},
    {value: 'horseShoe', viewValue: 'HorseShoe'}
  ];

  @Output() setItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setItem(){
    this.setItemEvent.emit(this.selectedValue);
    console.log(this.selectedValue);
  }

}
