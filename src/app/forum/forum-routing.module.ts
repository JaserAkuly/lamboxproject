import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPageComponent } from './forum-page/forum-page.component';
// import{ AuthGuard} from './../user/auth.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  // {path:'',redirectTo:'forum',pathMatch:'full'},
  {path:'', component:ForumPageComponent,
  //canActivate:[AuthGuard]*/
  },
  {path:'thread/:threadId', pathMatch: 'full', component:ViewComponent},
  // {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ForumRoutingModule { }