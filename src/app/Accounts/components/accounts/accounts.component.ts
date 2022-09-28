import { Component } from "@angular/core";
import { LoginModel } from "../../login.model";

@Component({
    selector:"accounts",
    templateUrl:"./accounts.component.html",
    styleUrls:["./accounts.component.css"]
})
export class AccountsComponent{

    onLoginSubmit(value:LoginModel):void{
        console.log("Logged in as user:" + value.username)
    }
    
}