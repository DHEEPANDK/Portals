import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-empleaveapply',
  templateUrl: './empleaveapply.component.html',
  styleUrls: ['./empleaveapply.component.css']
})
export class EmpleaveapplyComponent implements OnInit {
  today;
  todayt;
  empid;
  constructor(private data : DataService,private rou : Router,
     private spinner : NgxSpinnerService,public dialog: MatDialog) { this.today  = moment().format('YYYY-MM-DD');
  this.todayt  = moment().format('HH:mm');
}
  ngOnInit(): void {}
  updt1(){
    this.spinner.show();
    this.empid = this.data.getEmpid();
    let fdate = (document.getElementById("fdate") as HTMLInputElement).value;
    fdate = moment(fdate).format('YYYYMMDD');
    let tdate = (document.getElementById("tdate") as HTMLInputElement).value;
    tdate = moment(tdate).format('YYYYMMDD');
   let ftime = (document.getElementById("ftime") as HTMLInputElement).value;
   ftime = moment(ftime,["HH:mm"]).format("sshhmm");
   let ttime = (document.getElementById("ftime") as HTMLInputElement).value;
   ttime = moment(ttime,["HH:mm"]).format("sshhmm");
   let leave = (document.getElementById("leave") as HTMLInputElement).value;
   if(leave === "Sick Leave")
   {
     leave = "1001"
    } else if(leave === "Vacation"){leave = "1000"}
    else if(leave === "Emergency Leave"){leave = "1003"}
   else {leave = "1004"};
   console.log(leave,fdate,ftime,tdate,ttime);


   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "empid" : this.empid , "awart":leave,"begda":fdate, "beguz":ftime,"endda":tdate,"enduz":ttime}]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   }; 

   this.data.empall1(options).then((response)=>{

     response.json().then((res) => {
     if(res === "valid")
     {
       console.log(res);
       window.alert("inserted successfully");
       this.spinner.hide();
       this.dialog.closeAll();
       this.rou.navigate(['employeelogin/empdashboard']);
     }
     })
   })

}
}