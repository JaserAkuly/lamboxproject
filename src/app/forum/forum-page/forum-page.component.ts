import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

@Component({
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {
  user: any = {};
  threads: any[] = [];

  constructor() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
    this.getThreads();
  }

  ngOnInit() {}

  getThreads() {
    firebase
      .firestore()
      .collection('threads')
      .orderBy('created', 'desc')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs);
        this.threads = querySnapshot.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  // refresh the list of threads
  onThreadCreated() {
    this.threads = [];
    this.getThreads();
  }

  // refresh the list of threads
  onDelete() {
    this.threads = [];
    this.getThreads();
  }
}