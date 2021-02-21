import { Component, Output, EventEmitter} from '@angular/core';
import { ItemName } from '../../constants/item-names';

interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-price-list-select-item',
  templateUrl: './price-list-select-item.component.html',
  styleUrls: ['./price-list-select-item.component.scss']
})
export class PriceListSelectItemComponent{

  selectedValue: string;
 
  items: Item[] = [
    {value: ItemName.PENGUIN_EAR, viewValue: 'PenguinEar'},
    {value: ItemName.HORSE_SHOE, viewValue: 'HorseShoe'}
  ];

  @Output() setItemEvent = new EventEmitter<string>();

  setItem(){
    this.setItemEvent.emit(this.selectedValue);
  }

}
