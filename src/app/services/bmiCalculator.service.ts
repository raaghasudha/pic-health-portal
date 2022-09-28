import { Inject, Injectable } from "@angular/core";
import { BmiInputModel } from "../models/bmiInput.model";
import { ILoggerService } from "./loggerContracts.service";

@Injectable()
export class BmiCalculatorService
{
 
    loggerService:ILoggerService;
    constructor(@Inject("logger")loggerService:ILoggerService)
    {
        this.loggerService = loggerService;
    }
    calculateBmi(data:BmiInputModel):number
    {
        this.loggerService.write("BmiCalculatorService Calculate Method")
        return (data.weight/data.height/data.height)*10000;
    }
}