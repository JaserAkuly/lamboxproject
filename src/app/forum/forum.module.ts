import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ForumPageComponent } from './forum-page/forum-page.component';
import { ResponsesComponent } from './responses/responses.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ForumPageComponent,
    ResponsesComponent,
    CreateThreadComponent,
    ThreadListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ForumModule { }
