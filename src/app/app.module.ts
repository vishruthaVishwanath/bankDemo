import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'

import { CustloginComponent } from './customer/custlogin/custlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustlandingComponent } from './customer/custlanding/custlanding.component';
import { CustomerComponent } from './customer/customer.component';
const appRoutes:Routes=[
  {path:'',component:WelcomeComponent},
  {path:'cust',component:CustomerComponent,children:[
        {path:'',component:CustloginComponent},
        {path:'home',component:CustlandingComponent}]},
  
  {path:'emp',component:EmploginComponent} ,
  {path:'**',redirectTo:''}
]
@NgModule({
  declarations: [
    AppComponent,
    CustloginComponent,
    EmploginComponent,
    WelcomeComponent,
    CustlandingComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
