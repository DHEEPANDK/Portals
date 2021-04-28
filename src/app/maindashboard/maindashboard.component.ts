import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
 
  constructor(private rout : Router) {
  
   }
  @ViewChild('sidenav') sidenav:any;
toggleSidenav()
  {
    this.sidenav.toggle();
    
  }

  ngOnInit() {   }
    back(){
      this.rout.navigate(['maintenancelogin']) 
    }
  
}
