import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../cards.service';
import { CardI } from '../cards.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  lambocolor: any;

  public cards$: Observable<CardI[]>;
  @Input() card: CardI;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards$ = this.cardsService.getAllCards();
  }
}
