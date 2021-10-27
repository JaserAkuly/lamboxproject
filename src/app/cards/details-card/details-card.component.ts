import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Observable } from 'rxjs';
import { CardI } from '../cards.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  public card$: Observable<CardI>;
  
  constructor(private route: ActivatedRoute, private cardsService: CardsService) { }

  ngOnInit() {
    const cardId = this.route.snapshot.params.id;
    this.card$ = this.cardsService.getOneCard(cardId);

  }
}