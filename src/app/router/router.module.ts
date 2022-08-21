


import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { OnePostComponent } from '../groupamania-module/components/one-post/one-post.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes , Router } from '@angular/router';

import { PageAccueilleComponent } from '../groupamania-module/components/page-accueille/page-accueille.component';
import { PageProfilComponent } from '../groupamania-module/components/page-profil/page-profil.component';
import { SignInLoginComponent } from '../groupamania-module/components/sign-in-login/sign-in-login.component';




const routes: Routes = [
  { path: 'accueille', component: PageAccueilleComponent },
  { path: 'profil', component: PageProfilComponent },
  { path: "", component: SignInLoginComponent },
  { path: 'accueille/:id', component: OnePostComponent },
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

