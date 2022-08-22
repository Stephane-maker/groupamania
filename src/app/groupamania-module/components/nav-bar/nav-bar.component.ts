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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  onAccueille() {
    this.router.navigateByUrl("accueille")
  }
  onProfil() {
    this.router.navigateByUrl("profil")
  }
  onDeconnexion() {
    localStorage.clear()
    localStorage.removeItem("access_token")

    if (!localStorage.getItem("ID") && !localStorage.getItem("access_token")) {
      this.router.navigateByUrl("/")
    }
  }

}
