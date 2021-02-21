import { SimpleChanges } from '@angular/core';
import { Component, OnInit,AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Item } from '../../models/Item';


@Component({
  selector: 'app-price-list-table',
  templateUrl: './price-list-table.component.html',
  styleUrls: ['./price-list-table.component.scss']
})
export class PriceListTableComponent implements OnInit, OnChanges {

  @Input() itemList:Item[];
  dataSource: MatTableDataSource<Item>;

  // ELEMENT_DATA: Item[] = [
  //   { name: 'Hydrogen', units: 1.0079, price: 2},
  //   { name: 'Helium', units: 4.0026, price: 4},
  //   { name: 'Hydrogen', units: 1.0079, price: 2},
  //   { name: 'Helium', units: 4.0026, price: 4},
  //   { name: 'Hydrogen', units: 1.0079, price: 2},
  //   { name: 'Helium', units: 4.0026, price: 4},
  
  // ];

  displayedColumns: string[] = ['name', 'units', 'price'];
  

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit(){
    this.dataSource = new MatTableDataSource<Item>(this.itemList);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      const change = changes[propName];
      if (propName === 'itemList') {
        this.dataSource = new MatTableDataSource<Item>(this.itemList);
        this.dataSource.paginator = this.paginator;
      }
    }
  }


}
