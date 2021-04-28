import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-venquotation',
  templateUrl: './venquotation.component.html',
  styleUrls: ['./venquotation.component.css']
})
export class VenquotationComponent implements OnInit {
  items = [];
  header ;
  quotdtls: any;
  title = "HEADER DETAILS";
  headvisible = true;
  itemvisible = false 
  constructor(private spinner : NgxSpinnerService,private data: DataService,private rou: Router) {
    this.spinner.show();
   }
   venid;
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
    
   this.data.venquot(options).then((response)=>{
    response.json().then((res) => {
      this.spinner.hide();
      this.quotdtls = res;
      console.log(this.quotdtls)
       this.header = this.quotdtls[0];
     
    })
   })
  }
  back() {
    this.rou.navigate(['vendorlogin/vendordashboard']);
  }
  ok(dt)
  {
    for(let i=0;i<this.quotdtls[1].length;i++){
      if(this.quotdtls[1][i].EBELN['_text'] === dt.EBELN['_text']){
        this.items.push(this.quotdtls[1][i])
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
