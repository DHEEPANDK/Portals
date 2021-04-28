import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-shopfloor-login',
  templateUrl: './shopfloor-login.component.html',
  styleUrls: ['./shopfloor-login.component.css']
})
export class ShopfloorLoginComponent implements OnInit {

  onClick: () => void;
  show = false;
  show1 = false;
  constructor(private data: DataService , private router: Router , private spinner : NgxSpinnerService,private snack : MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.onClick = () => {
      let bukrs = (document.getElementById("bukrs") as HTMLInputElement).value;
      let pwd = (document.getElementById("pwd") as HTMLInputElement).value;
      if(bukrs == "" || pwd == ""){
        this.show1 = true;
      }
      else{ 
        this.spinner.show();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify([{"bukrs":bukrs,"pwd":pwd,"edate":"","firm":"","matnr":"","plnum":"",
          "prodnum":"","scqty":"","totqty":"","sdate":"" ,"typ":""}]);
        const options = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
        
        this.data.shop(options).then((response) => {  
          response.json().then((res) => {
    
              if(res ==='valid')
                {
                  this.data.setBukrs(bukrs)
                  this.spinner.hide();
                  this.router.navigate(['shopfloorlogin/dashboard']) 
                  this.snack.open('Login Success!!','Undo')
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
