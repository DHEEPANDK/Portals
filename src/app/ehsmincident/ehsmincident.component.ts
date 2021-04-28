import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { EhsmeditComponent } from '../ehsmedit/ehsmedit.component';
@Component({
  selector: 'app-ehsmincident',
  templateUrl: './ehsmincident.component.html',
  styleUrls: ['./ehsmincident.component.css']
})
export class EhsmincidentComponent implements OnInit {

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
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"DISP" , "recn" : "", "valfr":"","valto":"","crdat":"",
    "iapl":"","evdesc" : "","equnr":"","eqdesc":"","result":""}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.ehsm(options).then((response)=> {
    
      response.json().then((res) => {
       
        this.leavearray = res;
       
       for(let i=0;i<this.leavearray.length;i++)
        {
          console.log(this.leavearray)

            this.size = this.leavearray.length - 4;

           for(let i=1;i<this.size;i++) {
            this.leavearray.pop();
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
   openDialog(sale){
     sale["tp"] = "edit"
   this.dialog.open(EhsmeditComponent,{data:sale});
     console.log(sale)
   }
   ncreate()
   {
    let sale = {};
    sale["tp"] = "create"
     this.dialog.open(EhsmeditComponent,{data:sale})
   }
    back(){
      this.rout.navigate(['ehsmlogin']) 
    }

}
