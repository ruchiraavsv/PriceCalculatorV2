import { SimpleChanges } from '@angular/core';
import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
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
