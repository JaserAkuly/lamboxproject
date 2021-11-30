import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../user/login-page/login-page.component';
import { EditProfileComponent } from '../user/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: ':id', component: LoginPageComponent },
  { path:'edit-profile/:id', component: EditProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
