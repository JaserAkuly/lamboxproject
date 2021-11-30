import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-message-dialog',
  template: `
    <h1 mat-dialog-title>Your thought about this model</h1>
    <div mat-dialog-content>
    <p>Is this a good model to buy? Has known issues? add link to citation source</p>
      <mat-form-field>
        <input placeholder="I think this model..." matInput [(ngModel)]="data.ask" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-raised-button color="accent" [mat-dialog-close]="data.ask" cdkFocusInitial>🔩 lets go</button>
    </div>
  `
})

export class MessageDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private afAuth: AngularFireAuth,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

}