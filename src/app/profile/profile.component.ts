import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   list : any;
   name : any;
   id : any;
   phone : any;
   country : any;
   pcode : any;
   city  : any;
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.list = this.data.getUserData();
    this.name = this.list[0].CUSNAME['_text'];
    this.id = this.list[0].CUSID['_text'];
    this.phone = this.list[0].PHONE['_text'];
    this.country = this.list[0].COUNTRY['_text'];
    this.pcode = this.list[0].PCODE['_text'];
    this.city = this.list[0].CITY['_text'];
  }
   


}
