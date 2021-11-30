import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
import { CardI } from '../collection.model';
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

  constructor(private cardsService: CollectionService) { }

  ngOnInit() {
    this.cards$ = this.cardsService.getAllCards();
  }
}
