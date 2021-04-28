import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show = false;
  public title;
constructor( private router:Router) {
      if(this.router.url === "")
      {
        this.show = true
      }
    }
   ngOnInit(): void {} 
}
