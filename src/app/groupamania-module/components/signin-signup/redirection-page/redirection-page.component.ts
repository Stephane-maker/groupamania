import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirection-page',
  templateUrl: './redirection-page.component.html',
  styleUrls: ['./redirection-page.component.scss']
})
export class RedirectionPageComponent implements OnInit {

  constructor(private router: Router) { }
  imageUrl!:string ;
  ngOnInit(): void {
    this.imageUrl = "./../../../../../assets/GroupomaniaLogos/icon-left-font-monochrome-black.png";
  }
  onConnexion() {
    this.router.navigateByUrl("/connection")
  }
  onRegistration() {
    this.router.navigateByUrl("/registration")
  }

}
