import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-overallsales',
  templateUrl: './overallsales.component.html',
  styleUrls: ['./overallsales.component.css']
})
export class OverallsalesComponent implements OnInit {

  constructor(private data : DataService,private rout : Router,private spin:NgxSpinnerService) {
    this.spin.show();
   }
  cusid ;
  back : () => void;
  del : any []
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

   this.data.cusovsl(options).then((response)=>{
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
}
