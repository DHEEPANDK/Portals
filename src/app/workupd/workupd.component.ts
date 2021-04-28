import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-workupd',
  templateUrl: './workupd.component.html',
  styleUrls: ['./workupd.component.css']
})
export class WorkupdComponent implements OnInit {

  bukrs: any;
  tp: string;

  constructor(@Inject(MAT_DIALOG_DATA) public sale : any,private data : DataService,private rou : Router
  , private spinner : NgxSpinnerService,public dialog: MatDialog) { 
    if(sale.AUART['_text'] === "Breakdown")
    {
     this.tp = "PM02";
    }
    else{
      this.tp = "PM01";
    }
  }

  ngOnInit(): void {}

  updt1() {
    this.spinner.show();
    let qmnum = (document.getElementById("nid") as HTMLInputElement).value;
    let  auart= (document.getElementById("typ") as HTMLInputElement).value;
    let erdat = (document.getElementById("dat") as HTMLInputElement).value;
    let ktext = (document.getElementById("desc") as HTMLInputElement).value;
    let aufnr = (document.getElementById("oid") as HTMLInputElement).value;
    let astnr = (document.getElementById("status") as HTMLInputElement).value;
    if(astnr === "Success"){astnr = "02"}
    else{astnr="01"}
    this.bukrs= this.data.getBukrs();
    erdat = moment(erdat).format('YYYYMMDD')
     console.log(qmnum,auart,erdat,ktext,aufnr,astnr,this.bukrs)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"pwd":"","astnr":astnr,"auart":auart,"aufnr":aufnr,"equnr":"","erdat":erdat,"iwerk":"","klvarp":"2000","ktext":ktext,"msaus":"","qmart":"","qmdat" :"",
    "qmnum":qmnum,"qmtxt":"","typ":"WORKU" }]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 

   

    this.data.maint(options).then((response)=>{

      response.json().then((res) => {
      if(res === "valid")
      {
        this.spinner.hide();
        this.dialog.closeAll();
        console.log(res);
        window.alert("updated successfully");
        this.rou.navigate(['maintenancelogin/maindashboard']);
        
      }
      })
    })

  }

}
