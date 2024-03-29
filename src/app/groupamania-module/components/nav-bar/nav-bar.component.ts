import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  faUser = faUser;
  faRightFromBracket = faRightFromBracket;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  onAccueille() {
    this.router.navigateByUrl("groupamania/accueille")
  }
  onProfil() {
    this.router.navigateByUrl("groupamania/profil")
  }
  onDeconnexion() {
    localStorage.clear()
    localStorage.removeItem("access_token")

    if (!localStorage.getItem("ID") && !localStorage.getItem("access_token")) {
      this.router.navigateByUrl("/")
    }
  }

}
