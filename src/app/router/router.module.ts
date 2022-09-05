import { RegistrationUserComponent } from './../groupamania-module/components/signin-signup/registration-user/registration-user.component';


import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes , Router } from '@angular/router';

import { RedirectionPageComponent } from '../groupamania-module/components/signin-signup/redirection-page/redirection-page.component';
import { SignInLoginComponent } from '../groupamania-module/components/signin-signup/connexion-user/sign-in-login.component';

const routes: Routes = [
  { path: "groupamania", loadChildren: () => import("../groupamania-module/groupamania-router/groupamania-router.module").then(m => m.GroupamaniaRouterModule) },
  { path: "", component: RedirectionPageComponent },
  { path: "registration", component: RegistrationUserComponent },
  {path:"connection", component: SignInLoginComponent},
  { path: "**" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule {
  constructor(private router: Router) { }
}

