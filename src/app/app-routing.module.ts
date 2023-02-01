import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLandingComponent } from './landing/user-landing/user-landing.component';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', component: UserLandingComponent },
  { path: 'landing', component: UserLandingComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
