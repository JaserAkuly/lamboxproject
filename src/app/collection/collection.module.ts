
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CollectionRoutingModule } from './collection-routing.module';
import { DetailsCardComponent } from './details-card/details-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { DialogComponent } from './dialog/dialog.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { MessageComponent } from './message/message.component';
import { MessageDialogComponent } from './message/message-dialog.component';

 
@NgModule({
  declarations: [
    DetailsCardComponent,
    EditCardComponent,
    DialogComponent,
    NewCardComponent,
    CardComponent,
    TableComponent,
    MessageComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CollectionModule { }
