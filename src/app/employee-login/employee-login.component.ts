import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  onClick: () => void;
  show = false;
  show1 = false;
  constructor(private data: DataService , private router: Router , private spinner : NgxSpinnerService) { 
    
  }

  ngOnInit(): void {
    this.onClick = () => {
      let empid = (document.getElementById("empid") as HTMLInputElement).value;
      let pwd = (document.getElementById("pwd") as HTMLInputElement).value;
      if(empid == "" || pwd == ""){
        this.show1 = true;
      }
      else{ 
        this.spinner.show();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{ "empid" : empid , "pwd" : pwd , "age":"00","famst":"0","gbdat":"00000000",
        "gbdep":"0","gblnd":"0","gesch":"0","nach2":"0","pmonth":"0","pyear":"0","typ":"0","vorna":"0"  }]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
        
        this.data.empall(options).then((response) => {  
          response.json().then((res) => {
    
              if(res ==='valid')
                {
                  this.data.setEmpid(empid)
                  this.spinner.hide();
                  this.router.navigate(['employeelogin/empdashboard']) 
                }
              else if(res === 'invalid') {
                this.spinner.hide();
                 this.show = true;
              }    
          })
        })
      
    }
  }

}
}
