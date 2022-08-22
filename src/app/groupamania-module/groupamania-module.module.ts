import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPostComponent } from './components/general-post/general-post.component';
import { GroupamaniaComponent } from './components/groupamania/groupamania.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { PageAccueilleComponent } from './components/page-accueille/page-accueille.component';
import { PageProfilComponent } from './components/page-profil/page-profil.component';
import { SignInLoginComponent } from './components/sign-in-login/sign-in-login.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminDataComponent } from './components/admin/admin-data/admin-data.component';
import { AffichageDataAdminComponent } from './components/admin/affichage-data-admin/affichage-data-admin.component';




@NgModule({
  declarations: [
    GeneralPostComponent,
    GroupamaniaComponent,
    OnePostComponent,
    PageAccueilleComponent,
    PageProfilComponent,
    SignInLoginComponent,
    NavBarComponent,
    AdminPageComponent,
    AdminDataComponent,
    AffichageDataAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    GeneralPostComponent,
    GroupamaniaComponent,
    OnePostComponent,
    PageAccueilleComponent,
    PageProfilComponent
  ]
})
export class GroupamaniaModuleModule { }
