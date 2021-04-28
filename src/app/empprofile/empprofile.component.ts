import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  constructor(private data : DataService) { }
    list;
    pernr;
    vorna;
    nach2;
    gesch;
    gbdat;
    gblnd;
    gbdep;
    age;
    famst;
  ngOnInit(): void {
   this.list = this.data.getEmppro();
   console.log(this.list);
   this.pernr= this.list[0].PERNR['_text'];
   this.vorna = this.list[0].VORNA['_text'];
   this.nach2 = this.list[0].NACH2['_text'];
   this.gesch = this.list[0].GESCH['_text'];
   if(this.gesch ==="M")
   {this.gesch = "MALE"}
   else if(this.gesch ==="F"){this.gesch = "FEMALE"}else{this.gesch = "OTHERS"}
   this.gbdat = moment(this.list[0].GBDAT['_text']).format('DD-MM-YYYY');
   this.gblnd = this.list[0].GBLND['_text'];
   this.gbdep = this.list[0].GBDEP['_text'];
   this.age = this.list[0].AGE['_text'];
   this.famst = this.list[0].FAMST['_text'];
  }
}
