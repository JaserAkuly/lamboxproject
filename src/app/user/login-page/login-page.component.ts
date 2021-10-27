import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(
    public afAuth: AngularFireAuth,
    private clipboard: Clipboard
  ) { }

  alertCopy() {
    alert(`link copied 👍`);
  }
 
}
