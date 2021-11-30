import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { PostComponent } from './post/post.component';
import { AdminGuard } from '../user/role.guard';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent},
  { path: 'edit', component: TableComponent, canActivate: [AdminGuard]},
  { path: 'post/:id', component: DetailsPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }