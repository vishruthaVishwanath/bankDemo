import { Component, OnInit } from '@angular/core';
import {CustDataService} from '../cust-data.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-custlanding',
  templateUrl: './custlanding.component.html',
  styleUrls: ['./custlanding.component.css']
})
export class CustlandingComponent implements OnInit {

  constructor(private router:Router,
    private custDataService:CustDataService) {
    
   }
  isAuthenticated = false;
  name;
  id;
  transfermoney=false;  
  transactionSuccess=false;
  ministmt=false;


  ngOnInit(): void {
    this.name = this.custDataService.account[0].name;
    this.id = this.custDataService.account[0].userId;
  }


  transfer(){
    this.transfermoney = true;
  }
  moneytransfer(form: NgForm){
    this.transfermoney = false;
    this.transactionSuccess =true;
    
  }
  transferCancel(){
    this.transfermoney = false;
  }










  statement(){
      this.ministmt = true;
  }
  onLogout(){
    this.custDataService.updateAccount('','',false);
    this.router.navigate(['/cust']);
  }

}
