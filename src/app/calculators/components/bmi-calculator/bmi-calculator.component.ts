import { Component, OnInit,Input,Output ,EventEmitter,Inject} from '@angular/core';
import { ILoggerService } from 'src/app/services/loggerContracts.service';
import { BmiCalculatorService } from 'src/app/services/bmiCalculator.service';
import { BmiInputModel } from 'src/app/models/bmiInput.model';


@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {



  ngOnInit(): void {
  }
  calcservice:BmiCalculatorService;
    loggerService:ILoggerService;
    bmi:number=0;

    //Constructor Injection
    constructor(@Inject("logger")loggerService:ILoggerService,service:BmiCalculatorService)
    {
        this.loggerService = loggerService;
        this.calcservice = service;
    }

    calculateBmi(data:BmiInputModel)
    {
        this.loggerService.write("Calculating Bmi....")
        this.bmi = this.calcservice.calculateBmi(data);
    }

    clearBmiResult()
    {
        this.bmi = 0;
    }
}
