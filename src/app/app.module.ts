import { GroupamaniaModuleModule } from './groupamania-module/groupamania-module.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './router/router.module';

import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from '@angular/common/http';
import * as fr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CoreModule,
    GroupamaniaModuleModule,
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
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-FR"}
  ]
})

export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
