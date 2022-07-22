import { AppRoutingModule } from './router/router.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageAccueilleComponent } from './page-accueille/page-accueille.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilleComponent,
    PageNotFoundComponent,
    PageProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
