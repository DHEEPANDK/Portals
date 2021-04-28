import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private custid = new BehaviorSubject('10');
 currentcustid = this.custid.asObservable();
 list = [{
     CUSNAME  : "aa",
     CUSID  : "bb",
     PHONE : "cc",
     COUNTRY : "dd",
     PCODE : "ee",
     CITY : "ff"
 }];
 updateCustomerid(message: string) {
  this.custid.next(message)
  }

  getUserData(){ 
    return this.list; 
 } 
 setUserData(data:any[]){
  this.list = data;
}  
venid = 10;
getVenid(){ 
  return this.venid; 
} 
setVenid(data : any){
this.venid= data;
} 

venprof = [];
getVenpro()
{
  return this.venprof;
}
setVenpro(data:any[]){
  this.venprof = data;
} 

podtls;
getVenpo()
{
  return this.podtls;
}
setVenpo(data){
  this.podtls = data;
} 

empid= 10;
getEmpid(){ 
  return this.empid; 
} 
setEmpid(data : any){
this.empid= data;
} 

Empprofile = [];
getEmppro()
{
  return this.Empprofile;
}
setEmppro(data:any[]){
  this.Empprofile = data;
} 

bukrs= 10;
getBukrs(){ 
  return this.bukrs; 
} 

setBukrs(data : any){
  this.bukrs= data;
  } 
  constructor() { }

  cuslogin(options) {
    return fetch("http://localhost:8000/cuslog",options);
  }
  
  cusprofile(options) {
      return fetch("http://localhost:8000/cusprof",options);
    }
    
  cusprofileupt(options) {
    return fetch("http://localhost:8000/cusprofupt",options);
  }
 
  cusinq(options) {
    return fetch("http://localhost:8000/cusinq",options);
  }

  cussal(options) {
    return fetch("http://localhost:8000/cussal",options);
  }

  cusdel(options) {
    return fetch("http://localhost:8000/cusdel",options);
  }

   cusinv(options) {
    return fetch("http://localhost:8000/cusinv",options);
  }

  cuspay(options) {
    return fetch("http://localhost:8000/cuspay",options);
  }

  cuscre(options) {
    return fetch("http://localhost:8000/cuscre",options);
  }

  cusovsl(options) {
    return fetch("http://localhost:8000/cusovsl",options);
  }

  venlogin(options) {
    return fetch("http://localhost:8000/venlog",options);
  }

  venprofile(options) {
    return fetch("http://localhost:8000/venprof",options);
  }
  
venprofileupt(options) {
  return fetch("http://localhost:8000/venprofupt",options);
}

venquot(options) {
  return fetch("http://localhost:8000/venquot",options);
}

venpur(options) {
  return fetch("http://localhost:8000/venpur",options);
}

vengoods(options) {
  return fetch("http://localhost:8000/vengoods",options);
}

venicp(options) {
  return fetch("http://localhost:8000/venicp",options);
}

empall(options) {
  return fetch("http://localhost:8000/empall",options);
}

empall1(options) {
  return fetch("http://localhost:8000/empall1",options);
}

maint(options) {
  return fetch("http://localhost:8000/maint",options);
}

shop(options) {
  return fetch("http://localhost:8000/shop",options);
}

ehsm(options) {
  return fetch("http://localhost:8000/ehsm",options);
}

quality(options) {
  return fetch("http://localhost:8000/quality",options);
}

cuslip(options) {
  return fetch("http://localhost:8000/slip",options);
}

}
