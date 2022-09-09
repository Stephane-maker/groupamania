import { Router } from '@angular/router';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  InscriptionForm!: FormGroup
 ngOnInit(): void {
     this.InscriptionForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    confirmEmail: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null,Validators.required],
    // address: [null, Validators.required],
    // city: [null, Validators.required],
  });
  }

  constructor(private fb: FormBuilder, private gs : GroupamaniaService, private router: Router) {}

  onSubmit(): void {
    console.log(this.InscriptionForm.valid)
    if (this.InscriptionForm.valid) {
    this.gs.InscriptionUser(this.InscriptionForm.value.email,this.InscriptionForm.value.confirmEmail,this.InscriptionForm.value.password,this.InscriptionForm.value.confirmPassword).subscribe((data) => {
            console.log(data)
            this.router.navigateByUrl("/")
          }, (err) => {
            console.log(err)
          })
    }
  }

  onBackHome() {
    this.router.navigateByUrl("/")
  }
}
