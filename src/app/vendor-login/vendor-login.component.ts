import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-Vendor-login',
  templateUrl: './Vendor-login.component.html',
  styleUrls: ['./Vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  onClick: () => void;
   result;
   show = false;
   show1 = false;
   venid;
   message;
   showspin = true;
  constructor(private data: DataService , private router: Router , private spinner : NgxSpinnerService) { 
    
  }

  ngOnInit(): void {
   
  
    this.onClick = () => {
      let venid = (document.getElementById("venid") as HTMLInputElement).value;
      let pwd = (document.getElementById("pwd") as HTMLInputElement).value;
      if(venid == "" || pwd == ""){
        this.show1 = true;
      }
      else{ 
        this.spinner.show();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{ "venid" : venid , "pwd" : pwd}]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
        
        this.data.venlogin(options).then((response) => {  
          response.json().then((res) => {
    
              if(res ==='valid')
                {
                  this.data.setVenid(venid)
                  this.spinner.hide();
                  this.router.navigate(['vendorlogin/vendordashboard']) 
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

 