import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ProfileupdateComponent } from '../profileupdate/profileupdate.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  dtls : String;
  cusid;
  profarray : any;
  list : any;
   name : any;
   id : any;
   phone : any;
   country : any;
   pcode : any;
   city  : any;
  constructor(private data: DataService, private rou:Router,public dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.data.currentcustid.subscribe(msg => this.cusid = msg);
    this.profarray = this.data.getUserData();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "cusid" : this.cusid}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    this.data.cusprofile(options).then((response)=> {
      
      response.json().then((res) => {
        this.profarray = Array.of(res);
       console.log(this.profarray)
       this.data.setUserData(this.profarray);
       this.list = this.data.getUserData();
       console.log(this.list)
       this.name = this.list[0].CUSNAME['_text'];
       this.id = this.list[0].CUSID['_text'];
       this.phone = this.list[0].PHONE['_text'];
       this.country = this.list[0].COUNTRY['_text'];
       this.pcode = this.list[0].PCODE['_text'];
       this.city = this.list[0].CITY['_text']; 
      }) 
    })

    
  }

  back(){
    this.rou.navigate(['customerlogin']) 
  }

  updt1(){
    const ref = this.dialog.open(ProfileupdateComponent);
    ref.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.list = result.data;
      this.name = this.list[0].CUSNAME['_text'];
      this.id = this.list[0].CUSID['_text'];
      this.phone = this.list[0].PHONE['_text'];
      this.country = this.list[0].COUNTRY['_text'];
      this.pcode = this.list[0].PCODE['_text'];
      this.city = this.list[0].CITY['_text']; 
    });
  }
}
