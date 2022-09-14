import { AppComponent } from './../app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModuleModule } from './mat-input-module/mat-input-module.module';

import { GroupamaniaRouterModule } from './groupamania-router/groupamania-router.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPostComponent } from './components/general-post/general-post.component';
import { GroupamaniaComponent } from './components/groupamania/groupamania.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { PageAccueilleComponent } from './components/page-accueille/page-accueille.component';
import { PageProfilComponent } from './components/profil/page-profil/page-profil.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';

import { InputNewPostComponent } from './components/input-new-post/input-new-post.component';

import { SignInLoginComponent } from './components/signin-signup/connexion-user/sign-in-login.component';
import { RedirectionPageComponent } from './components/signin-signup/redirection-page/redirection-page.component';


import { RegistrationUserComponent } from './components/signin-signup/registration-user/registration-user.component';
import { DoneeProfilComponent } from './components/profil/donee-profil/donee-profil.component';
import { AffichageProfilComponent } from './components/profil/affichage-profil/affichage-profil.component';

import * as fr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    GeneralPostComponent,
    GroupamaniaComponent,
    OnePostComponent,
    PageAccueilleComponent,
    PageProfilComponent,
    SignInLoginComponent,
    NavBarComponent,
    InputNewPostComponent,
    RedirectionPageComponent,
    RegistrationUserComponent,
    DoneeProfilComponent,
    AffichageProfilComponent
  ],
  imports: [
    CommonModule,
    GroupamaniaRouterModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    MatInputModuleModule,
    FontAwesomeModule
  ],
  exports: [
    GeneralPostComponent,
    GroupamaniaComponent,
    OnePostComponent,
    PageAccueilleComponent,
    PageProfilComponent,
    FontAwesomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class GroupamaniaModuleModule {
   constructor() {
       registerLocaleData(fr.default);
  }
 }
