import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendorinvoice',
  templateUrl: './vendorinvoice.component.html',
  styleUrls: ['./vendorinvoice.component.css']
})
export class VendorinvoiceComponent implements OnInit {

  venid;
  title;
  invdtls;
  typ;
  tbl1 = false;
  tbl2 = false;
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) { 
    this.title =this.data.getVenpo()
    this.spinner.show();
  }
  ngOnInit(): void {
    this.venid = this.data.getVenid(); 
     if(this.title === "INVOICE HISTORY"){this.typ= "IH";this.tbl1 = true }
     else{this.typ = "IP" ; this.tbl2 = true}
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
      this.invdtls = res;
      for(let i=0;i<=4;i++){
        this.invdtls.pop();
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