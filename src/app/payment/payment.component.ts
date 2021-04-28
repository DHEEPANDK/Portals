import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { ExtraComponent } from '../extra/extra.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private data : DataService,private rout : Router , private spin : NgxSpinnerService,public dialog: MatDialog) {
    this.spin.show()
   }
  cusid ;
  back : () => void;
  del : any []
  ngOnInit(): void {
   
   this.data.currentcustid.subscribe(msg => this.cusid = msg);
   console.log(this.cusid);
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "cusid" : this.cusid,"typ" :"P"}]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

   this.data.cuslip(options).then((response)=>{
    response.json().then((res) => {
      console.log(res);
      this.del=res;
      this.spin.hide();
    })


   })
   

   this.back =  () =>
   {
    this.rout.navigate(['customerlogin/customerdashboard']) 
   }
  }
  bck(){
    this.rout.navigate(['customerlogin']) 
  }
  ok(sale){
    sale["key"] = "pay";
    this.dialog.open(ExtraComponent,{data:sale});
  }
}
