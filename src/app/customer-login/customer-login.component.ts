import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  onClick: () => void;
   result;
   show = false;
   show1 = false;
   custid;
   message;
   showspin = true;
  constructor(private data: DataService , private router: Router , private spinner : NgxSpinnerService,
    private snack : MatSnackBar) { 
    
  }

  ngOnInit(): void {
   this.data.currentcustid.subscribe(msg => this.message = msg);
  
    this.onClick = () => {
      let cusid = (document.getElementById("cusid") as HTMLInputElement).value;
      let pwd = (document.getElementById("pwd") as HTMLInputElement).value;
      this.custid = cusid;
      if(cusid == "" || pwd == ""){
        this.show1 = true;
      }
      else{ 
        this.spinner.show();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{ "cusid" : cusid , "pwd" : pwd}]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
        
        this.data.cuslogin(options).then((response) => {  
          response.json().then((res) => {
    
              if(res ==='valid')
                {
                  this.data.updateCustomerid(this.custid);
                  this.spinner.hide();
                  this.router.navigate(['customerlogin/customerdashboard']) ;
                  this.snack.open('Login Success','Undo')
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

 