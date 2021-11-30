import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Observable } from 'rxjs';
import { CardI } from '../collection.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  public card$: Observable<CardI>;
  
  constructor(private route: ActivatedRoute, private cardsService: CollectionService) { }

  ngOnInit() {
    const cardId = this.route.snapshot.params.id;
    this.card$ = this.cardsService.getOneCard(cardId);

  }
}