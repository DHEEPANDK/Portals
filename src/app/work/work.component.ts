import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from '@angular/material/dialog';
import { WorkupdComponent } from '../workupd/workupd.component';
import { WorkcreateComponent } from '../workcreate/workcreate.component';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  bukrs: number;
  leavearray: any;
  @ViewChild('sidenav') sidenav:any;
  constructor(private rout : Router,private dat : DataService, private spinner : NgxSpinnerService,public dialog: MatDialog) { }
  
  ngOnInit() { 
    this.spinner.show();
    this.bukrs= this.dat.getBukrs();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"pwd":"","astnr":"","auart":"","aufnr":"","equnr":"","erdat":"","iwerk":"","klvarp":"","ktext":"","msaus":"","qmart":"","qmdat" :"",
    "qmnum":"","qmtxt":"","typ":"WORK" }]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.maint(options).then((response)=> {
    
      response.json().then((res) => {
       
        this.leavearray = res;
       
       for(let i=0;i<this.leavearray.length;i++)
        {
           if(this.leavearray[i].AUART['_text'] === "PM01"){this.leavearray[i].AUART['_text'] = "Preventive"}
           else {this.leavearray[i].AUART['_text'] = "Breakdown"}

           if(this.leavearray[i].ASTNR['_text'] === "01"){this.leavearray[i].ASTNR['_text'] = "Pending"}
           else {this.leavearray[i].ASTNR['_text'] = "Success"}
          }
          console.log(this.leavearray)
           for(let i=1;i<=5;i++) {
            this.leavearray.pop();
           }  
           this.spinner.hide();
       
      }) 
    })
   

   }
   
   openDialog(sale){
    this.dialog.open(WorkupdComponent,{data:sale});
      console.log(sale)
    }
    ncreate()
    {
      this.dialog.open(WorkcreateComponent)
    }
    back(){
      this.rout.navigate(['maintenancelogin']) 
    }
    toggleSidenav()
  {
    this.sidenav.toggle();
  }
}
