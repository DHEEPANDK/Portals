import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";
import {MatDialog} from '@angular/material/dialog';
import { ShopprodecComponent } from '../shopprodec/shopprodec.component';

@Component({
  selector: 'app-shopprod',
  templateUrl: './shopprod.component.html',
  styleUrls: ['./shopprod.component.css']
})
export class ShopprodComponent implements OnInit {

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
    "prodnum":"","scqty":"","totqty":"","sdate":"" ,"typ":"PRODD"}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.shop(options).then((response)=> {
    
      response.json().then((res) => {
        this.leavearray = res;
          console.log(this.leavearray)
            this.size = this.leavearray.length - 5;
            for(let i=0;i<this.leavearray.length;i++){
            if(this.leavearray[i].TARGET_QUANTITY['_text']==="0"){
              this.leavearray.splice(i,1);
            }}
           for(let i=1;i<this.size;i++) {
            this.leavearray.pop();
           }  
           
           this.spinner.hide();
      }) 
    })
   
   }

   rel(sale){
    this.spinner.show();
    //this.bukrs= this.dat.getBukrs();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify([{"bukrs":"","pwd":"","edate":"","firm":"","matnr":"","plnum":"",
    "prodnum":sale.ORDER_NUMBER['_text'],"scqty":"","totqty":"","sdate":"" ,"typ":"PR"}]);
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    this.dat.shop(options).then((response)=>{
      response.json().then((res) => {
      if(res === "valid")
      {
        this.spinner.hide();
        window.alert("Released successfully");
      }
      else{
        this.spinner.hide();
        window.alert("Order already released");
      }
      })
    })
   
   }
   toggleSidenav()
   {
     this.sidenav.toggle();
   }
   openDialog(sale){
     sale["tp"] = "edit"
   this.dialog.open(ShopprodecComponent,{data:sale});
     console.log(sale)
   }
   ncreate()
   {
    let sale = {};
    sale["tp"] = "create"
     this.dialog.open(ShopprodecComponent,{data:sale})
   }
    back(){
      this.rout.navigate(['shopfloorlogin']) 
    }
}
