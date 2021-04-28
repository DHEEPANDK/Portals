import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorcredit',
  templateUrl: './vendorcredit.component.html',
  styleUrls: ['./vendorcredit.component.css']
})
export class VendorcreditComponent implements OnInit {

  venid;
  credtls;
  typ;
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) { 
    this.spinner.show();
  }
 

  ngOnInit(): void {
    this.venid = this.data.getVenid(); 
    this.typ = "C" ;
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
      this.credtls = res;
      for(let i=0;i<=4;i++){
        this.credtls.pop();
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
