import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-empprofileupd',
  templateUrl: './empprofileupd.component.html',
  styleUrls: ['./empprofileupd.component.css']
})
export class EmpprofileupdComponent implements OnInit {
  
  pernr;
  vorna;
  nach2;
  gesch;
  gbdat;
  gblnd;
  gbdep;
  age;
  famst;
  @ViewChild("myinput") myInputField: ElementRef;
  list1: any;
  empid: number;
  list2: any[];
  ngAfterViewInit() {
  this.myInputField.nativeElement.focus();
  }
    constructor(@Inject(MAT_DIALOG_DATA) public list : any,private data : DataService,private spinner : NgxSpinnerService,
    public dialogRef: MatDialogRef<EmpprofileupdComponent>) {
     console.log(list);
    
     }

  ngOnInit(): void {
  }

  updt1() {
    this.spinner.show();
    let empid = (document.getElementById("eid") as HTMLInputElement).value;
    let vorna = (document.getElementById("vorna") as HTMLInputElement).value;
    let gesch = (document.getElementById("gesch") as HTMLInputElement).value;
    let gbdat = (document.getElementById("gbdat") as HTMLInputElement).value;
    let gblnd = (document.getElementById("gblnd") as HTMLInputElement).value;
    let gbdep = (document.getElementById("gbdep") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    gbdat = moment(gbdat).format('YYYYMMDD')
    this.list[0].VORNA['_text'] = vorna;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{ "empid" : empid , "pwd" : "0" , "age":age,"famst":"U","gbdat":gbdat,
        "gbdep":gbdep,"gblnd":gblnd,"gesch":gesch,"nach2":"KUMAR","pmonth":"0","pyear":"0","typ":"0","vorna":vorna  }]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 

   

    this.data.empall(options).then((response)=>{

      response.json().then((res) => {
      if(res === "valid")
      {
        console.log(res);
        window.alert("updated successfully");
        this.spinner.hide();
        this.empid = this.data.getEmpid();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{ "empid" : this.empid , "pwd" : "0" , "age":"00","famst":"0","gbdat":"00000000",
          "gbdep":"0","gblnd":"0","gesch":"0","nach2":"0","pmonth":"0","pyear":"0","typ":"PROF","vorna":"0"  }]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        this.data.empall(options).then((response)=> {
        
          response.json().then((res) => {
            this.list2 = Array.of(res);
            this.dialogRef.close( {event: 'close', data: this.list2});
          
          });});
      }
      })
    })

  }

}
