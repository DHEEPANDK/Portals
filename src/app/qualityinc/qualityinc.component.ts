import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
@Component({
  selector: 'app-qualityinc',
  templateUrl: './qualityinc.component.html',
  styleUrls: ['./qualityinc.component.css']
})
export class QualityincComponent implements OnInit {
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
  const raw = JSON.stringify([{ "bukrs":this.bukrs,"typ":"INS" , "iid" : "", "qs":"","vname":"","vdatum":"",
"werks":"","desc" : "",}]);
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  this.data.quality(options).then((response)=>{
    response.json().then((res) => {
      console.log(res);
      this.leavearray = res;
      for(let i=0;i<=4;i++) {
        this.leavearray.splice(i,1);
       }  
      this.spinner.hide();
      
    })


   })
  }
   back(){
     this.rout.navigate(['qualitylogin']) 
   }

}
