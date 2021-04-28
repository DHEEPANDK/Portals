import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { ExtraComponent } from '../extra/extra.component';

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.component.html',
  styleUrls: ['./deliverylist.component.css']
})
export class DeliverylistComponent implements OnInit {

  constructor(private data : DataService,private rout : Router, private spinner : NgxSpinnerService,public dialog: MatDialog) { 
    this.spinner.show();
  }
  cusid ;
  back : () => void;
  del : any []
  ngOnInit(): void {
   
   this.data.currentcustid.subscribe(msg => this.cusid = msg);
   console.log(this.cusid);
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "cusid" : this.cusid , "typ":"L" }]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

   this.data.cuslip(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      console.log(res);
      this.del=res;
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
    sale["key"] = "del";
    this.dialog.open(ExtraComponent,{data:sale});
  }
}
