import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorpayment',
  templateUrl: './vendorpayment.component.html',
  styleUrls: ['./vendorpayment.component.css']
})
export class VendorpaymentComponent implements OnInit {
  venid;
  paydtls;
  typ;
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) { 
    this.spinner.show();
  }
 

  ngOnInit(): void {
    this.venid = this.data.getVenid(); 
    this.typ = "P" ;
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "venid" : this.venid , "typ" : this.typ }]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 
    
   this.data.venicp(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      this.paydtls = res;
      for(let i=0;i<=4;i++){
        this.paydtls.pop();
      }
    })
   })
  }
  back() {
    this.rou.navigate(['vendorlogin/vendordashboard']);
  }
  bck() {
    this.rou.navigate(['vendorlogin']);
  }
}