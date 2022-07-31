import { InscriptionComponent } from './../inscription/inscription.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes , Router } from '@angular/router';

import { PageAccueilleComponent } from '../page-accueille/page-accueille.component';
import { PageProfilComponent } from '../page-profil/page-profil.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'accueille', component: PageAccueilleComponent },
  { path: 'profil', component: PageProfilComponent },
  {path: "" , component: InscriptionComponent},
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

