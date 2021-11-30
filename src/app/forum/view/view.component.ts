import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  thread: any = {};
  threadContent: any = {};
  threadId: string = '';

  constructor(public activateRoute: ActivatedRoute, public ngZone: NgZone) {
    let threadId = this.activateRoute.snapshot.paramMap.get('threadId');

    this.threadId = threadId;

    firebase
      .firestore()
      .collection('threads')
      .doc(threadId)
      .get()
      .then((docSnapshot) => {
        this.ngZone.run(() => {
          this.thread = docSnapshot.data();
          // this.threadContent = this.thread.content.content[0].content[0].text;
          // console.log(this.thread);
        });
      });
  }

  ngOnInit() {}
}
