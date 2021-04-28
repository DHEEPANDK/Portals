import { Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { EmpleaveapplyComponent } from '../empleaveapply/empleaveapply.component';
@Component({
  selector: 'app-empleavedata',
  templateUrl: './empleavedata.component.html',
  styleUrls: ['./empleavedata.component.css']
})
export class EmpleavedataComponent implements OnInit {

  leavearray: any[];
  leavearray1: any[];
  back: () => void;
  app = false;
  pen = false;
  rej = false;
  @ViewChild('sidenav') sidenav:any;
  size: number;
   constructor(private data: DataService , private rout:Router,private spinner : NgxSpinnerService,
    public dialog: MatDialog) { 
    this.spinner.show();
  }
  empid;
  ngOnInit(): void {
      this.empid = this.data.getEmpid();
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify([{ "empid" : this.empid , "pwd" : "0" , "age":"00","famst":"0","gbdat":"00000000",
     "gbdep":"0","gblnd":"0","gesch":"0","nach2":"0","pmonth":"0","pyear":"0","typ":"LEAVE","vorna":"0"  }]);
      const options = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      this.data.empall(options).then((response)=> {
      
        response.json().then((res) => {
          this.spinner.hide();
          this.leavearray = res;
          console.log(this.leavearray)
         for(let i=0;i<this.leavearray.length;i++)
          {
             this.leavearray[i].BEGDA['_text'] = moment(this.leavearray[i].BEGDA['_text']).format('DD-MM-YYYY');
             this.leavearray[i].ENDDA['_text'] = moment(this.leavearray[i].ENDDA['_text']).format('DD-MM-YYYY');
             if(this.leavearray[i].AWART['_text'] === "1000"){this.leavearray[i].AWART['_text'] = "Vacation"}
             else if(this.leavearray[i].AWART['_text'] === "1001"){this.leavearray[i].AWART['_text'] = "Sick Leave"}
             else if(this.leavearray[i].AWART['_text'] === "1003"){this.leavearray[i].AWART['_text'] = "Emergency Leave"}
             else {this.leavearray[i].AWART['_text'] = "Medical Leave"}
             if(this.leavearray[i].ZKMKT['_text'] === "A"){this.leavearray[i].ZKMKT['_text'] = "Approved"}
             else if(this.leavearray[i].ZKMKT['_text'] === "P"){this.leavearray[i].ZKMKT['_text'] = "Pending"}
             else {this.leavearray[i].ZKMKT['_text'] = "Rejected"}
            }

          /*  this.size = this.leavearray.length - 5;
            for(let i=1;i<this.size;i++) {
              this.leavearray.pop();
             } */
        }) 
      })
      this.back = () =>
      {
        this.rout.navigate(['/employeelogin'])
      }
  }
  toggleSidenav()
  {
    this.sidenav.toggle();
  }
  ncreate()
   {
     this.dialog.open(EmpleaveapplyComponent)
   }

}
