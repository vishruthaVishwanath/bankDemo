import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthCustService {

  loggedIn=false;
  credentials = {};

  login(name:string,password: string) {
    this.loggedIn = true;
    this.credentials = {
      userName : "testUser1",
      userId : "123",
      userAccNo : "123456"
    }    
  }

  logout() {
    this.loggedIn = false;
    this.credentials = {}   
  }
}
