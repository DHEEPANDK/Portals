import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { ExtComponent } from '../ext/ext.component';
@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {

  
  constructor(private data : DataService, private rout : Router , private spinner : NgxSpinnerService,public dialog: MatDialog) {
  this.spinner.show();
   }
  cusid ;
  inqdtls : any [];
  back: () => void;
  ngOnInit(): void {
   
   this.data.currentcustid.subscribe(msg => this.cusid = msg);
   console.log(this.cusid);
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "cusid" : this.cusid }]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

   
   this.data.cusinq(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      this.inqdtls = res;
      console.log(this.inqdtls);
    })


   })
   this.back = () =>
   {
     this.rout.navigate(['/customerlogin/customerdashboard'])
   }
   
  }

  bck(){
    this.rout.navigate(['customerlogin']) 
  }

  ok(sale){
    this.dialog.open(ExtComponent,{data:sale});
  }

}
