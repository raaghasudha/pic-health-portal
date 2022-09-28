import { NgModule } from "@angular/core";
import { HeadingModule } from "../heading/heading.module";
import { AccountsComponent } from "./components/accounts/accounts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from "@angular/common";
import { LoginMaterialModule } from "../loginMaterial.module";
import { MatInputModule } from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatCardModule
} from '@angular/material/card';

import {
    MatButtonModule
  } from '@angular/material/button';
import { LoginModel } from "./login.model";
import { AccountsService } from "../services/accounts.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[AccountsComponent,LoginComponent,SignupComponent],
    imports:[HttpClientModule,HeadingModule,FormsModule,CommonModule,LoginMaterialModule,ReactiveFormsModule,MatCardModule,MatInputModule,MatButtonModule,MatToolbarModule],
    exports:[AccountsComponent],
    providers:[ {provide:AccountsService,useClass:AccountsService}]
})
export class AccountsModule{

}