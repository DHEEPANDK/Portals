import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-notifcreate',
  templateUrl: './notifcreate.component.html',
  styleUrls: ['./notifcreate.component.css']
})
export class NotifcreateComponent implements OnInit {
  bukrs: number;

  constructor(private data : DataService,private rou : Router, private spinner : NgxSpinnerService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updt1() {
    this.spinner.show();
    let qmnum = (document.getElementById("nid") as HTMLInputElement).value;
    let  qmart= (document.getElementById("typ") as HTMLInputElement).value;
    let qmdat = (document.getElementById("dat") as HTMLInputElement).value;
    let qmtxt = (document.getElementById("desc") as HTMLInputElement).value;
    let equnr = (document.getElementById("eid") as HTMLInputElement).value;
   
    this.bukrs= this.data.getBukrs();
    qmdat = moment(qmdat).format('YYYYMMDD')
    console.log(qmnum,qmart,qmdat,qmtxt,equnr,this.bukrs)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"pwd":"","astnr":"","auart":"","aufnr":"","equnr":equnr,"erdat":"","iwerk":"SA01","klvarp":"","ktext":"","msaus":"","qmart":qmart,"qmdat" :qmdat,
    "qmnum":qmnum,"qmtxt":qmtxt,"typ":"NOTIFINS" }]);
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
        window.alert("created successfully");
        this.rou.navigate(['maintenancelogin/maindashboard']);
        
      }
      })
    })

  }

}
