import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldsSettings } from '@syncfusion/ej2-navigations';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  pay = false;
  del = false;
  inv = false;
  constructor(@Inject(MAT_DIALOG_DATA) public sale : any,public dialogRef: MatDialogRef<ExtraComponent>) { }

  ngOnInit(): void {
    console.log(this.sale);
    if(this.sale.key === "pay"){
      this.pay = true;
    }
    else if(this.sale.key === "del"){
      this.del = true;
    }
    else if(this.sale.key === "inv"){
      this.inv = true;
    }
  }
  close(): void {
    this.dialogRef.close();
}
}
