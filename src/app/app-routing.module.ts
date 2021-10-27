import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'profile', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  /*
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule), canActivate: [AuthGuard]},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}