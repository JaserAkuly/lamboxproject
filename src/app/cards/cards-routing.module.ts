import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { CardComponent } from './card/card.component';
import { AdminGuard } from '../user/role.guard';

const routes: Routes = [
  { path: 'card', component: CardComponent},
  { path: 'edit', component: TableComponent, canActivate: [AdminGuard]},
  { path: 'card/:id', component: DetailsCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }