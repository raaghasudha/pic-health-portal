import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './components/calculator-dashboard/calculator-dashboard.component';

const routes: Routes = [
  {path:"",component:CalculatorDashboardComponent,children:[
    {path:"bmi",component:BmiCalculatorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
