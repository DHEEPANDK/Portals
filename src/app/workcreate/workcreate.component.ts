import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-workcreate',
  templateUrl: './workcreate.component.html',
  styleUrls: ['./workcreate.component.css']
})
export class WorkcreateComponent implements OnInit {
  bukrs: any;

  constructor(private data : DataService,private rou : Router
    , private spinner : NgxSpinnerService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  updt1() {
    this.spinner.show();
    let qmnum = (document.getElementById("nid") as HTMLInputElement).value;
    let  auart= (document.getElementById("typ") as HTMLInputElement).value;
    let erdat = (document.getElementById("dat") as HTMLInputElement).value;
    let ktext = (document.getElementById("desc") as HTMLInputElement).value;
    let aufnr = (document.getElementById("oid") as HTMLInputElement).value;
 
    this.bukrs= this.data.getBukrs();
    erdat = moment(erdat).format('YYYYMMDD')
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"pwd":"","astnr":"","auart":auart,"aufnr":aufnr,"equnr":"","erdat":erdat,"iwerk":"","klvarp":"2000","ktext":ktext,"msaus":"","qmart":"","qmdat" :"",
    "qmnum":qmnum,"qmtxt":"","typ":"WORKC" }]);
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
        window.alert("Created successfully");
        this.rou.navigate(['maintenancelogin/maindashboard']);
        
      }
      })
    })

  }
}
