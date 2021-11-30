import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { CardI, FileI } from './collection.model';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private cardsCollection: AngularFirestoreCollection<CardI>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
  ) {
    this.cardsCollection = afs.collection<CardI>('cards', ref => ref.orderBy('subtitleCard', 'desc'));
  }

  public getAllCards(): Observable<CardI[]> {
    return this.cardsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as CardI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getOneCard(id: CardI): Observable<CardI> {
    return this.afs.doc<CardI>(`cards/${id}`).valueChanges();
  }

  public deleteCardById(card: CardI) {
    return this.cardsCollection.doc(card.id).delete();
  }

  public editCardById(card: CardI, newImage?: FileI) {
    if (newImage) {
      this.uploadImage(card, newImage);
    } else {
      return this.cardsCollection.doc(card.id).update(card);
    }
  }

  public preAddAndUpdateCard(card: CardI, image: FileI): void {
    this.uploadImage(card, image);
  }

  private saveCard(card: CardI) {
    const cardObj = {
      titleCard: card.titleCard,
      subtitleCard: card.subtitleCard,
      contentCard: card.contentCard,
      imageCard: this.downloadURL,
      fileRef: this.filePath,
      tagsCard: card.tagsCard
    };

    if (card.id) {
      return this.cardsCollection.doc(card.id).update(cardObj);
    } else {
      return this.cardsCollection.add(cardObj);
    }

  }

  private uploadImage(card: CardI, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.saveCard(card);
          });
        })
      ).subscribe();
  }
}
