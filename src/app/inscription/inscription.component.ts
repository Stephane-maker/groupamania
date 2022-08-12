
import { GroupamaniaService } from './../service/groupamania.service';
import { Router } from '@angular/router';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent implements OnInit {
  inscriptionForm!: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router, private groupamaniaService: GroupamaniaService) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.compose([Validators.required, Validators.minLength(2)])]]
    }
    )

  }
  onTest() {

    this.groupamaniaService.InscriptionUser(this.inscriptionForm.value.email, this.inscriptionForm.value.password).subscribe((error) => {

      return this.inscriptionForm.value.email, this.inscriptionForm.value.password
    }
  )
}
}

