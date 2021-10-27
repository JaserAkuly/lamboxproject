import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';

import { CardsModule } from '../cards/cards.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    SharedModule
  ]
})
export class HomeModule { }
