import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PriceListComponent } from './src/app/components/price-list/price-list.component';
import { PriceCalculatorComponent } from './src/app/components/price-calculator/price-calculator.component';
import { TopNavComponent } from './src/app/components/common/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceListSelectItemComponent } from './src/app/components/price-list-select-item/price-list-select-item.component';
import { PriceListTableComponent } from './src/app/components/price-list-table/price-list-table.component';
import { PriceCalculatorInputFormComponent } from './src/app/components/price-calculator-input-form/price-calculator-input-form.component';
import { PriceCalculatorPurchaseAmountComponent } from './src/app/components/price-calculator-purchase-amount/price-calculator-purchase-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    PriceCalculatorComponent,
    TopNavComponent,
    PriceListSelectItemComponent,
    PriceListTableComponent,
    PriceCalculatorInputFormComponent,
    PriceCalculatorPurchaseAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
