import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumPageComponent } from './forum-page/forum-page.component';

@NgModule({
  declarations: [ForumPageComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
  ]
})
export class ForumModule { }
