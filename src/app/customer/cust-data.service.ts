import { Injectable } from '@angular/core';

@Injectable()
export class CustDataService {

  constructor() { }
  account = [
    {
      name:"",
      userId:"",
      loggedIn:false
    }
  ];

  updateAccount(name,id,status){
    this.account[0].loggedIn=status;
    this.account[0].name=name;
    this.account[0].userId=id;
  }

  
}
