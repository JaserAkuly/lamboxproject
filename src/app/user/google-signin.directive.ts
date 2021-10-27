import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// new
import { RoleService } from './role.service';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(
    private afAuth: AngularFireAuth,
    private roleService: RoleService,
   ) {}

  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //update roles
    .then((credential) => {this.roleService.updateUserData(credential.user)})
  }

  
}
