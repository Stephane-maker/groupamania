import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirecting-connexion',
  templateUrl: './redirecting-connexion.component.html',
  styleUrls: ['./redirecting-connexion.component.scss']
})
export class RedirectingConnexionComponent{

 addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}
}
