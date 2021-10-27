
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CardsRoutingModule } from './cards-routing.module';
import { DetailsCardComponent } from './details-card/details-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { DialogComponent } from './dialog/dialog.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDialogComponent } from './comment/comment-dialog.component';

 
@NgModule({
  declarations: [
    DetailsCardComponent,
    EditCardComponent,
    DialogComponent,
    NewCardComponent,
    CardComponent,
    TableComponent,
    CommentComponent,
    CommentDialogComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardsModule { }
