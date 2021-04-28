import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-emppayslip',
  templateUrl: './emppayslip.component.html',
  styleUrls: ['./emppayslip.component.css']
})
export class EmppayslipComponent implements OnInit {
  dt:any;
  dt1 : any;
  dt2 : string;
  empid;
  profarray ;
  @ViewChild('sidenav') sidenav:any;
  constructor(private data : DataService,private rou : Router, private spinner : NgxSpinnerService) { }
  show= true;
  show1 = false;
  show3 = false;
  ngOnInit(): void {
  }
  updt1(){
    this.spinner.show()
    this.empid = this.data.getEmpid();
     this.dt = (document.getElementById("fdate") as HTMLInputElement).value;
      this.dt = moment(this.dt).format("YYYY");
      this.dt1 = (document.getElementById("fdate") as HTMLInputElement).value;
      this.dt1 = moment(this.dt1).month();
      this.dt2 = moment().month(this.dt1).format("MMMM");
      this.dt2= this.dt2.toUpperCase();
   console.log(this.dt,this.dt2);
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   const raw = JSON.stringify([{ "empid" : this.empid , "pwd" : "0" , "age":"00","famst":"0","gbdat":"00000000",
     "gbdep":"0","gblnd":"0","gesch":"0","nach2":"0","pmonth":this.dt2,"pyear":this.dt,"typ":"0","vorna":"0"  }]);
   const options = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
   this.data.empall(options).then((response)=> {
     response.json().then((res) => {
      //console.log(res);
       this.profarray = res;
    this.spinner.hide();
       console.log(this.profarray)
       this.show = false;
       if(this.profarray.PERNR['_text'] === "1"){
       this.show3 = true;}
       else{
       this.show1 = true;
       } 
     }) 
   })
   
  }
  bck()
  {
    
    if(this.profarray.PERNR['_text'] === "1"){
    this.show3 = false;this.show = true;this.profarray = {};}
    else{
    this.show1 = false;
    this.profarray = {};
    this.show = true;}
  }
  toggleSidenav()
  {
    this.sidenav.toggle();
  }
  
  back() 
  {
    this.rou.navigate(['/employeelogin'])
  }
}
