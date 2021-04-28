import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
@Component({
  selector: 'app-ehsmrisk',
  templateUrl: './ehsmrisk.component.html',
  styleUrls: ['./ehsmrisk.component.css']
})
export class EhsmriskComponent implements OnInit {
  bukrs: any;
  leavearray : any;
  constructor(private rout : Router,private spinner : NgxSpinnerService,private data: DataService ) {
  
  }
 @ViewChild('sidenav') sidenav:any;
toggleSidenav()
 {
   this.sidenav.toggle();
   
 }

 ngOnInit() {  
  this.spinner.show();
  this.bukrs= this.data.getBukrs();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"RISK" , "recn" : "", "valfr":"","valto":"","crdat":"",
"iapl":"","evdesc" : "","equnr":"","eqdesc":"","result":""}]);
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  this.data.ehsm(options).then((response)=>{
    response.json().then((res) => {
      console.log(res);
      this.leavearray = res;
      for(let i=0;i<=4;i++) {
        this.leavearray.splice(i,1);
       }  
       for(let j=0;j<this.leavearray.length;j++){
        if(this.leavearray[j].SEVERE['_text'] <50){
          this.leavearray[j].SEVERE['_text'] = "LOW";
        }
        else{
         this.leavearray[j].SEVERE['_text'] = "HIGH";
        }
       }
       
      this.spinner.hide();
      
    })


   })
  }
   back(){
     this.rout.navigate(['ehsmlogin']) 
   }
}
