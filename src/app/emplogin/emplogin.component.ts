import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAuthenticated = true;
  
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log("----------to do---------------")
  }

  onLogout(){
    
  }
}
