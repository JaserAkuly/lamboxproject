import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  user: any = {};
  threads: any[] = [];

  constructor(public activatedRoute: ActivatedRoute, private afAuth: AngularFireAuth) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.getProfile(id);
    this.getUsersPosts(id);
  }

  ngOnInit() {}

  getProfile(id: string) {
    // firebase.firestore().settings({
    //   timestampsInSnapshots: true
    // })

    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        this.user = documentSnapshot.data();
        // this.user.displayName = this.user.firstName + ' ' + this.user.lastName;
        this.user.id = documentSnapshot.id;
        this.user.hobbies = this.user.hobbies.split(',');
        console.log(this.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUsersPosts(id: string) {
    firebase
      .firestore()
      .collection('threads')
      .where('owner', '==', id)
      .get()
      .then((data) => {
        this.threads = data.docs;
      });
  }
  

}
