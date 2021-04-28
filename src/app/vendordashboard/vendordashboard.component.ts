import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VenprofileupdtComponent } from '../venprofileupdt/venprofileupdt.component';
@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.css']
})
export class VendordashboardComponent implements OnInit {
  profarray: any[];
  list;
  id;
  name;
  region;
  street;
  city;
  country;
  post;
  constructor(private data: DataService , private rou:Router,private dialog : MatDialog) { }
  venid;
  ngOnInit(): void {
      this.venid = this.data.getVenid();
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify([{ "venid" : this.venid}]);
      const options = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      this.data.venprofile(options).then((response)=> {
      
        response.json().then((res) => {
          this.profarray = Array.of(res);
          console.log(this.profarray)
         this.data.setVenpro(this.profarray);
         this.list = this.data.getVenpro();
         this.id = this.list[0].VENID['_text'];
         this.name = this.list[0].NAME1['_text'];
         this.region = this.list[0].REGIO['_text'];
         this.street = this.list[0].STRAS['_text'];
         this.city = this.list[0].ORT01['_text'];
         this.country = this.list[0].LAND1['_text'];
         this.post = this.list[0].PSTLZ['_text'];
        }) 
      })
  }

 mpl()
 {
  this.data.setVenpo("MATERIAL PURCHASE ORDER")
   this.rou.navigate(['vendorlogin/vendordashboard/venpur'])
 }

 mpl1()
 {
  this.data.setVenpo("SERVICE PURCHASE ORDER")
   this.rou.navigate(['vendorlogin/vendordashboard/venpur'])
 }

 mpl2()
 {
  this.data.setVenpo("INVOICE HISTORY")
   this.rou.navigate(['vendorlogin/vendordashboard/veninv'])
 }

 mpl3()
 {
  this.data.setVenpo("INVOICE PENDING")
   this.rou.navigate(['vendorlogin/vendordashboard/veninv'])
 }

 back(){
  this.rou.navigate(['vendorlogin']) 
}

updt1(){
  const ref = this.dialog.open(VenprofileupdtComponent);
  ref.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    this.list = result.data;
    this.id = this.list[0].VENID['_text'];
    this.name = this.list[0].NAME1['_text'];
    this.region = this.list[0].REGIO['_text'];
    this.street = this.list[0].STRAS['_text'];
    this.city = this.list[0].ORT01['_text'];
    this.country = this.list[0].LAND1['_text'];
    this.post = this.list[0].PSTLZ['_text'];
  });
}
}
