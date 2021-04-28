import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-venpurchase',
  templateUrl: './venpurchase.component.html',
  styleUrls: ['./venpurchase.component.css']
})
export class VenpurchaseComponent implements OnInit {
  items = [];
  header ;
  quotdtls: any;
  title = "HEADER DETAILS";
  headvisible = true;
  itemvisible = false;
  venid;
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) { 
    this.spinner.show();
  }
 title1;
  ngOnInit(): void {
    this.title1 = this.data.getVenpo();
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
    
   this.data.venpur(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      this.quotdtls = res;
      for(let i=0;i<5;i++)
      {
        this.quotdtls[0].pop();
        this.quotdtls[2].pop();
      }
      if(this.title1 === "SERVICE PURCHASE ORDER")
       this.header = this.quotdtls[0];
       else
       this.header = this.quotdtls[2];
     
    })
   })
  }

  back() {
    this.rou.navigate(['vendorlogin/vendordashboard']);
    this.header = [];
  }
  ok(dt)
  {
    if(this.title1 === "SERVICE PURCHASE ORDER"){
    for(let i=0;i<this.quotdtls[1].length;i++){
      if(this.quotdtls[1][i].EBELN['_text'] === dt.EBELN['_text']){
        this.items.push(this.quotdtls[1][i])
      }
    }
  }
  else{
    for(let i=0;i<this.quotdtls[3].length;i++){
      if(this.quotdtls[3][i].EBELN['_text'] === dt.EBELN['_text']){
        this.items.push(this.quotdtls[3][i])
      }
    }
  }
    this.headvisible = false
    this.title = "LINE ITEMS"
    this.itemvisible = true
  console.log(this.items)
  }
  backit() {
    this.title = "HEADER DETAILS"
    this.items = []
    this.itemvisible = false
    this.headvisible = true;
  }
  bck() {
    this.rou.navigate(['vendorlogin']);
    
  }

}
