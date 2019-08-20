import { RegistrationComponent } from '../auth/registration/registration.component';
import { LoginComponent } from '../auth/login/login.component';
import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { UsersComponent } from '../users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'users', component: UsersComponent},
  {path: 'user/:id', component: UsersDetailComponent},

  {path: '', pathMatch: 'full', redirectTo: 'users'} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
