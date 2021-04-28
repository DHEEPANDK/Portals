import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-notifupdialog',
  templateUrl: './notifupdialog.component.html',
  styleUrls: ['./notifupdialog.component.css']
})
export class NotifupdialogComponent implements OnInit {
  bukrs: any;
  tp: string;

  constructor(@Inject(MAT_DIALOG_DATA) public sale : any,private data : DataService,private rou : Router
  , private spinner : NgxSpinnerService,public dialog: MatDialog) { 
    if(sale.QMART['_text'] === "Breakdown")
    {
     this.tp = "M2";
    }
    else{
      this.tp = "M1";
    }
  }

  ngOnInit(): void {}

  updt1() {
    this.spinner.show();
    let qmnum = (document.getElementById("nid") as HTMLInputElement).value;
    let  qmart= (document.getElementById("typ") as HTMLInputElement).value;
    let qmdat = (document.getElementById("dat") as HTMLInputElement).value;
    let qmtxt = (document.getElementById("desc") as HTMLInputElement).value;
    let equnr = (document.getElementById("eid") as HTMLInputElement).value;
    let msaus = (document.getElementById("status") as HTMLInputElement).value;
    if(msaus === "Success"){msaus = "S"}
    else{msaus="P"}
    this.bukrs= this.data.getBukrs();
    qmdat = moment(qmdat).format('YYYYMMDD')
    console.log(qmnum,qmart,qmdat,qmtxt,equnr,msaus,this.bukrs)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"pwd":"","astnr":"","auart":"","aufnr":"","equnr":equnr,"erdat":"","iwerk":"SA01","klvarp":"","ktext":"","msaus":msaus,"qmart":qmart,"qmdat" :qmdat,
    "qmnum":qmnum,"qmtxt":qmtxt,"typ":"NOTIFUPD" }]);
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
