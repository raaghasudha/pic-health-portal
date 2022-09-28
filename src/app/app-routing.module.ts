import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Accounts/components/login/login.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { HomeComponent } from './components/root/home/home.component';
const routes: Routes = [
    /*Route Objects */
    {path:"home",component:HomeComponent,children:[
        {path:"login",component:LoginComponent}
    ]},
    {path:"",redirectTo:"home",pathMatch:"full"},
    
    {path :"main-cards/:username",component:MainCardsComponent,children:[
        {path:"calculators",loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)}
    ]}
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }