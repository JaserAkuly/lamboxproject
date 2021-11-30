import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';

import { CollectionModule } from '../collection/collection.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { WhenComponent } from './when/when.component';

@NgModule({
  declarations: [PageComponent, AboutComponent, WhenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CollectionModule,
    SharedModule
  ]
})
export class HomeModule { }
