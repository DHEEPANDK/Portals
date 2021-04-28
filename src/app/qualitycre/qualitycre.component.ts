import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-qualitycre',
  templateUrl: './qualitycre.component.html',
  styleUrls: ['./qualitycre.component.css']
})
export class QualitycreComponent implements OnInit {

  bukrs: any;
  show = false;
  show1 = false;
 constructor(@Inject(MAT_DIALOG_DATA) public sale : any,private data : DataService,private rou : Router
 , private spinner : NgxSpinnerService,public dialog: MatDialog) { 
   if(sale.tp === "create"){this.show = true }else{this.show1 = true}
 }

 ngOnInit(): void {}
 crt() {
  this.spinner.show();
 
  let edat = (document.getElementById("ed") as HTMLInputElement).value;
  let  def = "S";
  let desc = (document.getElementById("desc") as HTMLInputElement).value;
  let vdatum = (document.getElementById("vd") as HTMLInputElement).value;
  let vname = (document.getElementById("vn") as HTMLInputElement).value;
  this.bukrs= this.data.getBukrs();
 
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"RC" , "iid" : edat, "qs":def,"vname":vname,"vdatum":vdatum,
"werks":this.bukrs,"desc" : desc}]);

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }; 

 

  this.data.quality(options).then((response)=>{

    response.json().then((res) => {
    if(res === "valid")
    {
      this.spinner.hide();
      this.dialog.closeAll();
      console.log(res);
      window.alert("created successfully");
      this.rou.navigate(['qualitylogin/dboard']);
      
    }
    })
  })

}

crt1() {
  this.spinner.show();
 
  //let recn = (document.getElementById("recn") as HTMLInputElement).value;
  //let iid = (document.getElementById("iid") as HTMLInputElement).value;
  let qs = (document.getElementById("qs") as HTMLInputElement).value;
  let vdatum = (document.getElementById("vd") as HTMLInputElement).value;
  let vname = (document.getElementById("vn") as HTMLInputElement).value;
  this.bukrs= this.data.getBukrs();
 
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"UC" , "iid" : "", "qs":qs,"vname":vname,"vdatum":vdatum,
"werks":this.bukrs,"desc" : ""}]);

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }; 

 

  this.data.quality(options).then((response)=>{

    response.json().then((res) => {
    if(res === "valid")
    {
      this.spinner.hide();
      this.dialog.closeAll();
      console.log(res);
      window.alert("created successfully");
      this.rou.navigate(['qualitylogin/dboard']);
      
    }
    })
  })

}
}
