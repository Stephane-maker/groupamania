import { OnePostComponent } from './../components/one-post/one-post.component';
import { PageProfilComponent } from './../components/page-profil/page-profil.component';
import { PageAccueilleComponent } from './../components/page-accueille/page-accueille.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: 'accueille', component: PageAccueilleComponent },
  { path: 'accueille/post/:id', component: OnePostComponent },
  { path: 'profil', component: PageProfilComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupamaniaRouterRoutingModule { }
