import { GroupamaniaService } from './service/groupamania.service';



import { AppRoutingModule } from './router/router.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageAccueilleComponent } from './page-accueille/page-accueille.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupamaniaComponent } from './groupamania/groupamania.component';
import { GeneralPostComponent } from './general-post/general-post.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilleComponent,
    PageNotFoundComponent,
    PageProfilComponent,
    InscriptionComponent,
    GroupamaniaComponent,
    GeneralPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

}
