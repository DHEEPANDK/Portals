import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { QualitycreComponent } from '../qualitycre/qualitycre.component';
@Component({
  selector: 'app-qualityusa',
  templateUrl: './qualityusa.component.html',
  styleUrls: ['./qualityusa.component.css']
})
export class QualityusaComponent implements OnInit {

 
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
    const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"UD" , "iid" : "", "qs":"","vname":"","vdatum":"",
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
           for(let h=0;h<this.leavearray.length;h++){
            if(this.leavearray[h].QKENNZAHL["_text"] >50)
            this.leavearray[h].VORGLFNR["_text"] = "CAN BE PROCESSED";
            else
            this.leavearray[h].VORGLFNR["_text"] = "CANNOT BE PROCESSED";
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
    sale["tp"] = "create1"
     this.dialog.open(QualitycreComponent,{data:sale})
   }
    back(){
      this.rout.navigate(['qualitylogin']) 
    }

}
