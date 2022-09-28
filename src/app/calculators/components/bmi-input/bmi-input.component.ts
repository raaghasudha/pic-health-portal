import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { BmiInputModel } from "src/app/models/bmiInput.model";

@Component({
  selector: 'app-bmi-input',
  templateUrl: './bmi-input.component.html',
  styleUrls: ['./bmi-input.component.css']
})
export class BmiInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  height:number = 0;
    weight:number = 0;
    @Output()
    inputAvailable = new EventEmitter<BmiInputModel>();

    @Output() clearEvent = new EventEmitter();

    
    onHeightChanged(heightValue:string)
    {
        this.height = parseInt(heightValue)
    }

    onWeightChanged(weightValue:string)
    {
        this.weight = parseInt(weightValue)
    }
    calculateBmi()
    {
       //callback container component
       const data = new BmiInputModel(this.height,this.weight);       
       this.inputAvailable.emit(data);
    }
    clear()
    {
        this.height = 0;
        this.weight = 0;
        this.clearEvent.emit();
    }


}
