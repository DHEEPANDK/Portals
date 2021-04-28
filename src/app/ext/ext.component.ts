import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ext',
  templateUrl: './ext.component.html',
  styleUrls: ['./ext.component.css']
})
export class ExtComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public sale : any,public dialogRef: MatDialogRef<ExtComponent>) { }

  ngOnInit(): void {
    console.log(this.sale)
  }
  close(): void {
    this.dialogRef.close();
}

}
 