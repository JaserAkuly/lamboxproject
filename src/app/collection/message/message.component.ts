import { Component, OnInit, } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from './message-dialog.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Message {
  id?: string;
  cardId?: string;
  userId?: string;
  ask?: string;
  // date?: any;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  messages: Message[]; // from board.model
  sub: Subscription; // from rxjs
  cardId: string; //

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {}

  // drop boards
  /*
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.messages, event.previousIndex, event.currentIndex);
    this.cardService.sortMessages(this.messages);
  }
  */
  // dialog new board
  openMessageDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createMessage({
          ask: result,
          cardId: this.cardId = this.route.snapshot.paramMap.get('id'),
          // priority: this.messages.length
        });
      }
    });
  }

  async createMessage(data: Message) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    const user = await this.afAuth.auth.currentUser;
    const expires = 2 * 60 * 60;
    return this.db.collection('messages').add({
      ...data,
      userId: user.uid,
      createdAt: timestamp(),
      // tasks: [{ description: 'Hello!', label: 'yellow' }]
    });
  }
 
  messagesCollection: AngularFirestoreCollection<Message>;
  messagesObservable: Observable<Message[]>;
 
  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id');
    // Step 1: Make a reference
    this.messagesCollection = this.db.collection('messages', ref => ref.where('cardId', '==', this.cardId))
    // .orderBy('createdAt')) // not working yet

    // Step 2: Get an observable of the data
    this.messagesObservable = this.messagesCollection.valueChanges({ idField: 'id' }); // idfield to get messageId
  }


}