import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// import { Thread } from '../forum.model';


@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss'],
})
export class CreateThreadComponent implements OnInit {

  // editorConfig: any;
  title: string;
  // content: string; changed for ngx-editor 5
  content: any;
  @Output('threadCreated') threadCreated = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /*
  createThread(thread: Thread[]) {
    firebase
      .firestore()
      .collection('threads')
      .add({ thread })
      .then((data) => {
        // console.log(data);
        this.threadCreated.emit();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  */
  
  createThread() {
    firebase
      .firestore()
      .collection('threads')
      .add({
        title: this.title,
        content: this.content,
        owner: firebase.auth().currentUser.uid,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((data) => {
        // console.log(data);
        this.threadCreated.emit();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

}
