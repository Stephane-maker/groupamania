


import { AppRoutingModule } from './router/router.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageAccueilleComponent } from './page-accueille/page-accueille.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupamaniaComponent } from './groupamania/groupamania.component';
import { GeneralPostComponent } from './general-post/general-post.component';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './one-post/one-post.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RedirectingConnexionComponent } from './redirecting-connexion/redirecting-connexion.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilleComponent,
    PageNotFoundComponent,
    PageProfilComponent,
    GroupamaniaComponent,
    GeneralPostComponent,
    OnePostComponent,
    RedirectingConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
    return localStorage.getItem("access_token");
  },
        allowedDomains: ["localhost:3000"],
        disallowedRoutes: ["http://localhost:3000/api/auth/signup","http://localhost:3000/api/auth/login" ],
      },
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}
