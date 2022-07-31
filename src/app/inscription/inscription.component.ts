import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      email:[null, [Validators.required]],
      password: [null , [Validators.compose([Validators.required, Validators.minLength(2)])]]
  }
    )

  }

  onTest() {
    console.log(this.inscriptionForm.value)
    this.router.navigateByUrl("/accueille")
  }
}
