import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-ehsmedit',
  templateUrl: './ehsmedit.component.html',
  styleUrls: ['./ehsmedit.component.css']
})
export class EhsmeditComponent implements OnInit {

  bukrs: any;
  show = false;
  show1 = false;
 constructor(@Inject(MAT_DIALOG_DATA) public sale : any,private data : DataService,private rou : Router
 , private spinner : NgxSpinnerService,public dialog: MatDialog) { 
   if(sale.tp === "edit"){this.show = true }else{this.show1 = true}
 }

 ngOnInit(): void {}

 updt1() {
   this.spinner.show();
   let recn = (document.getElementById("recn") as HTMLInputElement).value;
   let  crdat= (document.getElementById("crdat") as HTMLInputElement).value;
   let evdesc = (document.getElementById("evdesc") as HTMLInputElement).value;
   let equnr = (document.getElementById("equnr") as HTMLInputElement).value;
   let eqdesc = (document.getElementById("eqdesc") as HTMLInputElement).value;
   let result = (document.getElementById("result") as HTMLInputElement).value;
   this.bukrs= this.data.getBukrs();
  
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"CRT" , "recn" : recn, "valfr":crdat,"valto":crdat,"crdat":crdat,
   "iapl":this.bukrs,"evdesc" : evdesc,"equnr":equnr,"eqdesc":eqdesc,"result":result}]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

  

   this.data.ehsm(options).then((response)=>{

     response.json().then((res) => {
     if(res === "valid")
     {
       this.spinner.hide();
       this.dialog.closeAll();
       console.log(res);
       window.alert("updated successfully");
       this.rou.navigate(['ehsmlogin/dboard']);
       
     }
     })
   })

 }

 crt() {
   this.spinner.show();
  
   //let recn = (document.getElementById("recn") as HTMLInputElement).value;
   let  crdat= (document.getElementById("crdat") as HTMLInputElement).value;
   let evdesc = (document.getElementById("evdesc") as HTMLInputElement).value;
   let equnr = (document.getElementById("equnr") as HTMLInputElement).value;
   let eqdesc = (document.getElementById("eqdesc") as HTMLInputElement).value;
   let result = (document.getElementById("result") as HTMLInputElement).value;
   this.bukrs= this.data.getBukrs();
  
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"CRT" , "recn" : "", "valfr":crdat,"valto":crdat,"crdat":crdat,
   "iapl":this.bukrs,"evdesc" : evdesc,"equnr":equnr,"eqdesc":eqdesc,"result":result}]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

  

   this.data.ehsm(options).then((response)=>{

     response.json().then((res) => {
     if(res === "valid")
     {
       this.spinner.hide();
       this.dialog.closeAll();
       console.log(res);
       window.alert("created successfully");
       this.rou.navigate(['ehsmlogin/dboard']);
       
     }
     })
   })

 }
}
