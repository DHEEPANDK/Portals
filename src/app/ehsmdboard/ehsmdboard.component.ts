import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ehsmdboard',
  templateUrl: './ehsmdboard.component.html',
  styleUrls: ['./ehsmdboard.component.css']
})
export class EhsmdboardComponent implements OnInit {

  constructor(private rout : Router) {
  
  }
 @ViewChild('sidenav') sidenav:any;
toggleSidenav()
 {
   this.sidenav.toggle();
   
 }

 ngOnInit() {   }
   back(){
     this.rout.navigate(['ehsmlogin']) 
   }
}
