import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  response: string = "";
  responses: any[] = [];
  loggedIn: boolean = false;

  @Input("threadId") threadId: string;

  constructor() { 

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })

  }

  ngOnInit() {
    this.getResponses();
  }

  threadResponse(){

    if(this.response.length < 5){
      return;
    }

    firebase.firestore()
      .collection('threads').doc(this.threadId)  
      .collection('responses').add({
      text: this.response,
      thread: this.threadId,
      owner: firebase.auth().currentUser.uid,
      // ownerName: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      console.log("Response is saved!")
      this.getResponses();
    }).catch((error) => {
      console.log(error);
    })

  }

  getResponses(){

    this.responses = [];

    firebase.firestore()
    .collection('threads').doc(this.threadId)  
    .collection('responses')
    .orderBy('created', 'desc')
    .get().then((data) => {

      data.docs.forEach((responseRef)=>{
        this.responses.push(responseRef.data())
      })

    })

  }

}