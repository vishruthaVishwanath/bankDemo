import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import {AuthCustService} from "../../auth-cust.service"
import { Router } from '@angular/router';
import {CustDataService} from '../cust-data.service'


@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {

  constructor(private custAuth:AuthCustService,
              private router:Router,
              private custDataService:CustDataService) { }

  ngOnInit(): void {
  }

  isAuthenticated = false;  
  custCredentials={};


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const name=form.value.custname;
    const pwd=form.value.password;
    //call http service(service faked here)
    this.custAuth.login(name,pwd);
    this.isAuthenticated = this.custAuth.loggedIn;
    //update cust data service
    this.custDataService.updateAccount(name,'123',true);

    //login
    this.router.navigate(['/cust/home']);

  }
  

}
