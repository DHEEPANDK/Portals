import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ExtComponent } from '../ext/ext.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-saledata',
  templateUrl: './saledata.component.html',
  styleUrls: ['./saledata.component.css']
})
export class SaledataComponent implements OnInit {

  constructor(private data : DataService,private rout : Router,private spinner : NgxSpinnerService,public dialog: MatDialog ) { 
    this.spinner.show();
  }
  cusid ;
  back : () => void;
  saledt : any []
  
  ngOnInit(): void {
   
   this.data.currentcustid.subscribe(msg => this.cusid = msg);
   console.log(this.cusid);
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "cusid" : this.cusid , "typ":"S"}]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

   this.data.cuslip(options).then((response)=>{
    response.json().then((res) => {
      this.saledt = res
      this.spinner.hide();
      console.log(this.saledt)
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
    this.dialog.open(ExtComponent,{data:sale});
  }
}
