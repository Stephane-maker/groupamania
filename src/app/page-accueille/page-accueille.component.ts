import { GroupamaniaComponent } from './../groupamania/groupamania.component';


import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-accueille',
  templateUrl: './page-accueille.component.html',
  styleUrls: ['./page-accueille.component.scss']
})
export class PageAccueilleComponent implements OnInit {

  constructor() { }
  groupamaniaComponent!: GroupamaniaComponent;
  ngOnInit(): void {

  }

}
