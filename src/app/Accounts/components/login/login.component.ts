import { Component, Inject, inject, Input, Output ,EventEmitter} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgIf } from "@angular/common";
import { ConsoleLoggingService } from "src/app/services/consoleLogging.service";
import { ILoggerService } from "src/app/services/loggerContracts.service";
import { LoginModel } from "../../login.model";
import {Router} from "@angular/router"
import { AccountsService } from "src/app/services/accounts.service";

@Component({
    selector:"login-component",
    templateUrl:"./login.component.html",
    styleUrls:['./login.component.css']
})
export class LoginComponent {

    @Input() error: string =  "";
   
    constructor(private routerService:Router,private accountsService:AccountsService)
    {

    }
  
    @Output() submitEM = new EventEmitter();
    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  
    submit() 
    {
      if (this.form.valid) {
        const loginModel = new LoginModel(this.form.value["username"],this.form.value["password"])
        this.submitEM.emit(loginModel);
        console.log("Form Submitted")
        //Activate Route - import builtin service canlled Router and call navigate method
        
        this.accountsService.validateCred(this.form.value["username"],this.form.value["password"]).
        subscribe(results=> 
          {
            if(results)
            {
              this.routerService.navigate(['/main-cards',this.form.value["username"]])
            }
            console.log(results);
          },
        errors=>{console.log(errors)},
        ()=>{console.log("success")})

      }
      else
      {
        this.error = this.form.value.errors
      }
    }
   
  }