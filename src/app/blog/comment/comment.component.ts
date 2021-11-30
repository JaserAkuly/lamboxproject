import { Component, OnInit, } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Comment {
  id?: string;
  postId?: string;
  userId?: string;
  ask?: string;
  // date?: any;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  comments: Comment[]; // from board.model
  sub: Subscription; // from rxjs
  postId: string; //

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {}

  // drop boards
  /*
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.comments, event.previousIndex, event.currentIndex);
    this.postService.sortComments(this.comments);
  }
  */
  // dialog new board
  openCommentDialog(): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createComment({
          ask: result,
          postId: this.postId = this.route.snapshot.paramMap.get('id'),
          // priority: this.comments.length
        });
      }
    });
  }

  async createComment(data: Comment) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    const user = await this.afAuth.auth.currentUser;
    const expires = 2 * 60 * 60;
    return this.db.collection('comments').add({
      ...data,
      userId: user.uid,
      createdAt: timestamp(),
      // tasks: [{ description: 'Hello!', label: 'yellow' }]
    });
  }
 
  commentsCollection: AngularFirestoreCollection<Comment>;
  commentsObservable: Observable<Comment[]>;
 
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    // Step 1: Make a reference
    this.commentsCollection = this.db.collection('comments', ref => ref.where('postId', '==', this.postId))
    // .orderBy('createdAt')) // not working yet

    // Step 2: Get an observable of the data
    this.commentsObservable = this.commentsCollection.valueChanges({ idField: 'id' }); // idfield to get commentId
  }


}