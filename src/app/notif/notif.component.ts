import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { NotifupdialogComponent } from '../notifupdialog/notifupdialog.component';
import { NotifcreateComponent } from '../notifcreate/notifcreate.component';
@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit{
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
    "qmnum":"","qmtxt":"","typ":"NOTIF" }]);
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
           if(this.leavearray[i].QMART['_text'] === "M1"){this.leavearray[i].QMART['_text'] = "Preventive"}
           else {this.leavearray[i].QMART['_text'] = "Breakdown"}

           if(this.leavearray[i].MSAUS['_text'] === "P"){this.leavearray[i].MSAUS['_text'] = "Pending"}
           else {this.leavearray[i].MSAUS['_text'] = "Success"}
          }
          console.log(this.leavearray)
           for(let i=1;i<=5;i++) {
            this.leavearray.pop();
           }  
           this.spinner.hide();
       
      }) 
    })
   

   }
   toggleSidenav()
   {
     this.sidenav.toggle();
   }
   openDialog(sale){
   this.dialog.open(NotifupdialogComponent,{data:sale});
     console.log(sale)
   }
   ncreate()
   {
     this.dialog.open(NotifcreateComponent)
   }
    back(){
      this.rout.navigate(['maintenancelogin']) 
    }
}
