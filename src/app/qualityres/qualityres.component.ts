import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { QualitycreComponent } from '../qualitycre/qualitycre.component';
@Component({
  selector: 'app-qualityres',
  templateUrl: './qualityres.component.html',
  styleUrls: ['./qualityres.component.css']
})
export class QualityresComponent implements OnInit {

  bukrs: number;
  leavearray: any;
  
  @ViewChild('sidenav') sidenav:any;
  size: any;
 
  constructor(private rout : Router,private dat : DataService, private spinner : NgxSpinnerService,public dialog: MatDialog) { }

  
  ngOnInit() { 
    this.spinner.show();
    this.bukrs= this.dat.getBukrs();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"RD" , "iid" : "", "qs":"","vname":"","vdatum":"",
    "werks":"","desc" : "",}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.quality(options).then((response)=> {
    
      response.json().then((res) => {
       
        this.leavearray = res;
       
       for(let i=0;i<this.leavearray.length;i++)
        {
          console.log(this.leavearray)

            this.size = this.leavearray.length - 4;

           for(let i=1;i<this.size;i++) {
            this.leavearray.pop();
           }  
           for(let i=0;i<this.leavearray.length;i++)
           {
            if(this.leavearray[i].MBEWERTG["_text"]!='S')
            this.leavearray[i].MBEWERTG["_text"] = "Low";
            else
            this.leavearray[i].MBEWERTG["_text"] = "High";

             if(this.leavearray[i].SATZSTATUS["_text"]!='A')
             this.leavearray[i].SATZSTATUS["_text"] = "Results recorded";
             else
             this.leavearray[i].SATZSTATUS["_text"] = "Results pending";
           }
           this.spinner.hide();
          }
      })  
    })
   

   }
   toggleSidenav()
   {
     this.sidenav.toggle();
   }
   ncreate()
   {
    let sale = {};
    sale["tp"] = "create"
     this.dialog.open(QualitycreComponent,{data:sale})
   }
    back(){
      this.rout.navigate(['qualitylogin']) 
    }

}
