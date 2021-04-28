import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopdashboard',
  templateUrl: './shopdashboard.component.html',
  styleUrls: ['./shopdashboard.component.css']
})
export class ShopdashboardComponent implements OnInit {
  constructor(private rout : Router) {
  
  }
 @ViewChild('sidenav') sidenav:any;
toggleSidenav()
 {
   this.sidenav.toggle();
   
 }

 ngOnInit() {   }
   back(){
     this.rout.navigate(['shopfloorlogin']) 
   }

}
