import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './components/calculator-dashboard/calculator-dashboard.component';
import { LoginMaterialModule } from '../loginMaterial.module';
import { BmiInputComponent } from './components/bmi-input/bmi-input.component';
import { BmiResultComponent } from './components/bmi-result/bmi-result.component';
import { ConsoleLoggingService } from '../services/consoleLogging.service';
import { BmiCalculatorService } from '../services/bmiCalculator.service';




@NgModule({
  declarations: [

  
    BmiCalculatorComponent,
        CalculatorDashboardComponent,
        BmiInputComponent,
        BmiResultComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    LoginMaterialModule
  ],
  providers:[
    {provide:"logger",useClass:ConsoleLoggingService},
    {provide:BmiCalculatorService,useClass:BmiCalculatorService}
  ]
})
export class CalculatorsModule { }
