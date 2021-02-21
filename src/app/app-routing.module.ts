import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceCalculatorComponent } from './src/app/components/price-calculator/price-calculator.component';
import { PriceListComponent } from './src/app/components/price-list/price-list.component';


const routes: Routes = [
  
  {path: 'price-list', component: PriceListComponent},
  {path: 'price-calculator', component: PriceCalculatorComponent},
  {path: '**', component: PriceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
