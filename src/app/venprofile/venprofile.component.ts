import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-venprofile',
  templateUrl: './venprofile.component.html',
  styleUrls: ['./venprofile.component.css']
})
export class VenprofileComponent implements OnInit {

  constructor(private data : DataService) { }
    list;
    id;
    name;
    region;
    street;
    city;
    country;
    post;
  ngOnInit(): void {
   this.list = this.data.getVenpro();
   this.id = this.list[0].VENID['_text'];
   this.name = this.list[0].NAME1['_text'];
   this.region = this.list[0].REGIO['_text'];
   this.street = this.list[0].STRAS['_text'];
   this.city = this.list[0].ORT01['_text'];
   this.country = this.list[0].LAND1['_text'];
   this.post = this.list[0].PSTLZ['_text'];
  }

}
