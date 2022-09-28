import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.css']
})
export class BmiResultComponent implements OnInit {

  @Input()
bmi:number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
