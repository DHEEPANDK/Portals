import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vengoodsreceipt',
  templateUrl: './vengoodsreceipt.component.html',
  styleUrls: ['./vengoodsreceipt.component.css']
})
export class VengoodsreceiptComponent implements OnInit {

  venid;
  quotdtls;
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) { 
    this.spinner.show();
  }
  ngOnInit(): void {
    this.venid = this.data.getVenid();
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "venid" : this.venid }]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 
    
   this.data.vengoods(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      this.quotdtls = res;
      for(let i=0;i<=4;i++){
        this.quotdtls.pop();
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
