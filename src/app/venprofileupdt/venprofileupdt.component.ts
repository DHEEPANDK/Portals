import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-venprofileupdt',
  templateUrl: './venprofileupdt.component.html',
  styleUrls: ['./venprofileupdt.component.css']
})
export class VenprofileupdtComponent implements OnInit {
  list;
  id;
  name;
  region;
  street;
  city; 
  country;
  post;
  @ViewChild("myinput") myInputField: ElementRef;
  profarray1: any[];
  venid: number;
ngAfterViewInit() {
this.myInputField.nativeElement.focus();
}
  constructor(private data : DataService,private rou : Router,  private spinner : NgxSpinnerService,
    public dialogRef: MatDialogRef<VenprofileupdtComponent> ) { 
    this.list = this.data.getVenpro();
    this.id = this.list[0].VENID['_text'];
    this.name = this.list[0].NAME1['_text'];
    this.region = this.list[0].REGIO['_text'];
    this.street = this.list[0].STRAS['_text'];
    this.city = this.list[0].ORT01['_text'];
    this.country = this.list[0].LAND1['_text'];
    this.post = this.list[0].PSTLZ['_text']; 
     
  }

  ngOnInit(): void {

  }


  updt() {
    this.spinner.show();
    let venid = (document.getElementById("vid") as HTMLInputElement).value;
    let name = (document.getElementById("vname") as HTMLInputElement).value;
    let region = (document.getElementById("region") as HTMLInputElement).value;
    let street = (document.getElementById("street") as HTMLInputElement).value;
    let city = (document.getElementById("city") as HTMLInputElement).value;
    let country = (document.getElementById("country") as HTMLInputElement).value;
    let post = (document.getElementById("pcode") as HTMLInputElement).value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "venid" : venid , "name" :name , "region" : region , "street" : street, "city" : city  , "country" :country, "post" : post }]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 

   

    this.data.venprofileupt(options).then((response)=>{

      response.json().then((res) => {
      if(res === "valid")
      {
        alert("updated successfully");
        this.spinner.hide();

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
          this.profarray1 = Array.of(res);
          console.log(this.profarray1)
         this.data.setVenpro(this.profarray1);
         
        this.dialogRef.close( {event: 'close', data: this.data.getVenpro()});
                
        }) 
      })
      }
      })
    })
 
  }
}
