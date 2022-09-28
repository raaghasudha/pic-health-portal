import { Component, Input } from "@angular/core";

@Component({
    selector:"heading-component",
    templateUrl:"./heading.component.html"
})

export class HeadingComponent{

    @Input()
    headingMessage:string = ""

}