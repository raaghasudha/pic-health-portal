import { Component } from "@angular/core";

@Component({
    selector:"signup-component",
    templateUrl:"./signup.component.html"
})
export class SignupComponent{

    username:string = ""
    password:string = ""
    retypePassword:string = ""
    emailId:string = ""
    age:number = 0
    gender:string = ""

    onUserNameChanged(username:string):void
    {
        this.username = username;
    }
    onPasswordChanged(password:string):void
    {
        this.password = password;
    }
    onRetypePasswordChanged(retypePassword:string):void
    {
        this.retypePassword = retypePassword;
    }
    onEmailIdChanged(emailId:string):void
    {
        this.emailId = emailId;
    }
    onGenderSelected(gender:string):void
    {
        this.gender = gender;
    }
    onAgeChanged(age:string):void
    {
        this.age = parseInt(age);
    }
    signUpClick()
    {

    }
    clear()
    {
        this.username = ""
        this.password = "*"
        this.retypePassword = "*"
        this.emailId = ""
        this.age = 0;

    }
}