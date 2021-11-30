import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardI } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  private image: any;
  constructor(private cardsService: CollectionService) { }

  public newCardForm = new FormGroup({
    titleCard: new FormControl('', Validators.required),
    subtitleCard: new FormControl('', Validators.required),
    contentCard: new FormControl('', Validators.required),
    tagsCard: new FormControl('', Validators.required),
    imageCard: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  addNewCard(data: CardI) {
    console.log('New card', data);
    this.cardsService.preAddAndUpdateCard(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
