import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardI } from '../cards.model';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  private image: any;
  constructor(private cardsService: CardsService) { }

  public newCardForm = new FormGroup({
    titleCard: new FormControl('', Validators.required),
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
