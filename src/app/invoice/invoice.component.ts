import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ExtraComponent } from '../extra/extra.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private data : DataService,private rout : Router,private spinner : NgxSpinnerService,public dialog: MatDialog) {
    this.spinner.show();
   }
  cusid ;
  back : () => void;
  del : any []
  ngOnInit(): void {
   
   this.data.currentcustid.subscribe(msg => this.cusid = msg);
   
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "cusid" : this.cusid , "typ":"I" }]);
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
      this.spinner.hide();
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
    sale["key"] = "inv";
    this.dialog.open(ExtraComponent,{data:sale});
  }

}
