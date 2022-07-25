
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
        email: [null],
        password: [null]
    });
  }

  onTest() {
    console.log(this.inscriptionForm.value)
  }

}
