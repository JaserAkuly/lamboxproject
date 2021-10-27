import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardI } from '../cards.model';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() card: CardI;

  constructor(private cardsService: CardsService) { }

  public editCardForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titleCard: new FormControl('', Validators.required),
    contentCard: new FormControl('', Validators.required),
    tagsCard: new FormControl('', Validators.required),
    imageCard: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.image = this.card.imageCard;
    this.imageOriginal = this.card.imageCard;
    this.initValuesForm();
  }

  editCard(card: CardI) {
    if (this.image === this.imageOriginal) {
      card.imageCard = this.imageOriginal;
      this.cardsService.editCardById(card);
    } else {
      this.cardsService.editCardById(card, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editCardForm.patchValue({
      id: this.card.id,
      titleCard: this.card.titleCard,
      contentCard: this.card.contentCard,
      tagsCard: this.card.tagsCard
    });
  }

}
