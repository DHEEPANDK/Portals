import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataService } from '../data.service';
import {MatDialog} from '@angular/material/dialog';
import { EmpprofileupdComponent } from '../empprofileupd/empprofileupd.component';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  list: any[];
  pernr;
  vorna;
  nach2;
  gesch;
  gbdat;
  gblnd;
  gbdep;
  age;
  famst;

  constructor(private data: DataService , private rou:Router,public dialog: MatDialog) { }
  @ViewChild('sidenav') sidenav:any;
  empid;
  toggleSidenav()
 {
   this.sidenav.toggle();
   
 }
  ngOnInit(): void {
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
          this.list = Array.of(res);
          console.log(this.list)
          this.pernr= this.list[0].PERNR['_text'];
          this.vorna = this.list[0].VORNA['_text'];
          this.nach2 = this.list[0].NACH2['_text'];
          this.gesch = this.list[0].GESCH['_text'];
          if(this.gesch ==="M")
          {this.gesch = "MALE";
          this.list[0].GESCH['_text']  = "MALE"}
          else if(this.gesch ==="F"){this.gesch = "FEMALE";
          this.list[0].GESCH['_text']  = "FEMALE";}else{this.gesch = "OTHERS";
          this.list[0].GESCH['_text']  = "OTHERS"}
          this.gbdat = moment(this.list[0].GBDAT['_text']).format('DD-MM-YYYY');
          this.list[0].GBDAT['_text'] = moment(this.list[0].GBDAT['_text']).format('YYYY-MM-DD');
          this.gblnd = this.list[0].GBLND['_text'];
          this.gbdep = this.list[0].GBDEP['_text'];
          this.age = this.list[0].AGE['_text'];
          this.famst = this.list[0].FAMST['_text'];
              
        }) 
      })
  }
  back(){
    this.rou.navigate(['employeelogin']) 
  }
updt1(){
  const ref = this.dialog.open(EmpprofileupdComponent,{data : this.list})
  ref.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    this.list = result.data;
    this.pernr= this.list[0].PERNR['_text'];
    this.vorna = this.list[0].VORNA['_text'];
    this.nach2 = this.list[0].NACH2['_text'];
    this.gesch = this.list[0].GESCH['_text'];
    if(this.gesch ==="M")
    {this.gesch = "MALE";
    this.list[0].GESCH['_text']  = "MALE"}
    else if(this.gesch ==="F"){this.gesch = "FEMALE";
    this.list[0].GESCH['_text']  = "FEMALE";}else{this.gesch = "OTHERS";
    this.list[0].GESCH['_text']  = "OTHERS"}
    this.gbdat = moment(this.list[0].GBDAT['_text']).format('DD-MM-YYYY');
    this.list[0].GBDAT['_text'] = moment(this.list[0].GBDAT['_text']).format('YYYY-MM-DD');
    this.gblnd = this.list[0].GBLND['_text'];
    this.gbdep = this.list[0].GBDEP['_text'];
    this.age = this.list[0].AGE['_text'];
    this.famst = this.list[0].FAMST['_text'];
  });
}

}
