import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { ShopplanecComponent } from '../shopplanec/shopplanec.component';
@Component({
  selector: 'app-shopplan',
  templateUrl: './shopplan.component.html',
  styleUrls: ['./shopplan.component.css']
})
export class ShopplanComponent implements OnInit {
  bukrs: number;
  leavearray: any;
  
  @ViewChild('sidenav') sidenav:any;
  size: any;
 
  constructor(private rout : Router,private dat : DataService, private spinner : NgxSpinnerService,public dialog: MatDialog) { }

  
  ngOnInit() { 
    this.spinner.show();
    this.bukrs= this.dat.getBukrs();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{"bukrs":this.bukrs,"pwd":"","edate":"","firm":"","matnr":"","plnum":"",
    "prodnum":"","scqty":"","totqty":"","sdate":"" ,"typ":"PLAND"}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.shop(options).then((response)=> {
    
      response.json().then((res) => {
       
        this.leavearray = res;
       
       for(let i=0;i<this.leavearray.length;i++)
        {
          
           if(this.leavearray[i].AUFFX ['_text'] === "0"){this.leavearray[i].AUFFX ['_text'] = "Success"}
           else {this.leavearray[i].AUFFX ['_text'] = "Pending"}
          }
          console.log(this.leavearray)

            this.size = this.leavearray.length - 4;

           for(let i=1;i<this.size;i++) {
            this.leavearray.pop();
           }  
           this.spinner.hide();
       
      }) 
    })
   

   }
   toggleSidenav()
   {
     this.sidenav.toggle();
   }
   openDialog(sale){
     sale["tp"] = "edit"
   this.dialog.open(ShopplanecComponent,{data:sale});
     console.log(sale)
   }
   ncreate()
   {
    let sale = {};
    sale["tp"] = "create"
     this.dialog.open(ShopplanecComponent,{data:sale})
   }
    back(){
      this.rout.navigate(['shopfloorlogin']) 
    }

}
