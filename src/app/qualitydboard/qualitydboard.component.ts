import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qualitydboard',
  templateUrl: './qualitydboard.component.html',
  styleUrls: ['./qualitydboard.component.css']
})
export class QualitydboardComponent implements OnInit {
  constructor(private rout : Router) {
  
  }
 @ViewChild('sidenav') sidenav:any;
toggleSidenav()
 {
   this.sidenav.toggle();
   
 }

 ngOnInit() {   }
   back(){
     this.rout.navigate(['qualitylogin']) 
   }

}
