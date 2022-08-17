


import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { OnePostComponent } from './../one-post/one-post.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes , Router } from '@angular/router';

import { PageAccueilleComponent } from '../page-accueille/page-accueille.component';
import { PageProfilComponent } from '../page-profil/page-profil.component';
import { RedirectingConnexionComponent } from './../redirecting-connexion/redirecting-connexion.component';



const routes: Routes = [
  { path: 'accueille', component: PageAccueilleComponent },
  { path: 'profil', component: PageProfilComponent },
  { path: "", component: RedirectingConnexionComponent },
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

