import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  list : any;
  name : any;
  id : any;
  phone : any;
  country : any;
  pcode : any;
  city  : any;
  profarray: any;
  @ViewChild("myinput") myInputField: ElementRef;
  cusid: string;
  profarray1: any;
  list1: any;
  ngAfterViewInit() {
  this.myInputField.nativeElement.focus();
  }
  constructor(private data  : DataService, private rou : Router ,  private spinner : NgxSpinnerService,
    public dialogRef: MatDialogRef<ProfileupdateComponent>) {
    this.list = this.data.getUserData();
    this.name = this.list[0].CUSNAME['_text'];
    this.id = this.list[0].CUSID['_text'];
    this.phone = this.list[0].PHONE['_text'];
    //this.country = this.list[0].COUNTRY['_text'];
    this.pcode = this.list[0].PCODE['_text'];
    this.city = this.list[0].CITY['_text'];
   }

  ngOnInit(): void {
   
  }

      updt() {
        this.spinner.show();
        let cusid = (document.getElementById("cusid") as HTMLInputElement).value;
        let cusname = (document.getElementById("cusname") as HTMLInputElement).value;
        let phone = (document.getElementById("phone") as HTMLInputElement).value;
        let city = (document.getElementById("city") as HTMLInputElement).value;
       // let country = (document.getElementById("country") as HTMLInputElement).value;
        let pcode = (document.getElementById("pcode") as HTMLInputElement).value;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{ "cusid" : cusid , "cusname" : cusname , "phone" : phone , "city" : city  , "pcode" : pcode }]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
        this.data.cusprofileupt(options).then((response)=>{
          response.json().then((res) => {
          if(res === "valid")
          {
            alert("updated successfully");this.spinner.hide();
            this.data.currentcustid.subscribe(msg => this.cusid = msg);
          
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
                this.profarray1 = Array.of(res);
                console.log(this.profarray1)
                this.data.setUserData(this.profarray1);
                
                this.dialogRef.close( {event: 'close', data: this.data.getUserData()});
                
              }) 
            })
        
            
           
           // this.rou.navigate(['customerlogin/customerdashboard']);
          }
          })
        })

      }
   
}
