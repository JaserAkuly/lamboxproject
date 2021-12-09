import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
import { CardI } from '../collection.model';
import { Observable } from 'rxjs';
import { RoleService } from './../../user/role.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  lambocolor: any;
  user;

  public cards$: Observable<CardI[]>;
  @Input() card: CardI;

  constructor(
    private cardsService: CollectionService,
    public roleService: RoleService,
  ) { }

  ngOnInit() {
    this.cards$ = this.cardsService.getAllCards();
    this.roleService.user$.subscribe(user => this.user = user)
  }

}