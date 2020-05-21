import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CustDataService} from './cust-data.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustDataService]
})
export class CustomerComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ }


}
