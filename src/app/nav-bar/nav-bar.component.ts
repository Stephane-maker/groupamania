


import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import {  faHouse, faUser } from '@fortawesome/free-solid-svg-icons';




export class AppModule { }
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router) { }
  faHouse = faHouse;
  faUser = faUser;
  ngOnInit(): void {

  }
  onProfil() {
    this.router.navigateByUrl("profil");
  }
  onAcceuille() {
    this.router.navigateByUrl("accueille");
  }
}
