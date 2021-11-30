import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss'],
})
export class ThreadListComponent implements OnInit {
  @Input('thread') thread: any;
  @Output('onDelete') onDelete = new EventEmitter();

  userId: string;
  user: any;

  threadData: any = {};
  threadContent: any = {};
  constructor() {}

  ngOnInit() {
    this.user = firebase.auth().currentUser;
    this.threadData = this.thread.data();
    // this.threadContent = this.thread.data().content.content[0].content[0].text;
    // console.log(this.threadContent);

  }

  delete() {
    firebase
      .firestore()
      .collection('threads')
      .doc(this.thread.id)
      .delete()
      .then(() => {
        this.onDelete.emit();
      });
  }
}
