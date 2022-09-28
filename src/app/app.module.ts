import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './Accounts/accounts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/root/app.component';
import { HeadingModule } from './heading/heading.module';
import { ConsoleLoggingService } from './services/consoleLogging.service';
import {MatSliderModule} from '@angular/material/slider'
import { LoginMaterialModule } from './loginMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/root/home/home.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { BmiCalculatorComponent } from './calculators/components/bmi-calculator/bmi-calculator.component';
import { AccountsService } from './services/accounts.service';
import { HttpClient, HttpHandler } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCardsComponent
  ],
  imports: [
    BrowserModule,HeadingModule,FormsModule,MatSliderModule,BrowserAnimationsModule,LoginMaterialModule,AccountsModule,AppRoutingModule
  ],
  providers: [
    {provide:"logger",useClass:ConsoleLoggingService},
    {provide:BmiCalculatorComponent,useClass:BmiCalculatorComponent},
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
