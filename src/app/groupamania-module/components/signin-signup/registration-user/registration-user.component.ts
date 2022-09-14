
import { Router } from '@angular/router';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  InscriptionForm!: FormGroup;
  messageError!: string;
  durationInSeconds = 5;
 ngOnInit(): void {
     this.InscriptionForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    confirmEmail: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null,Validators.required]
  });
  }

  constructor(private fb: FormBuilder, private gs : GroupamaniaService, private router: Router, private _snackBar: MatSnackBar) {}

  onSubmit(): void {
    if (this.InscriptionForm.valid) {
    this.gs.InscriptionUser(this.InscriptionForm.value.email,this.InscriptionForm.value.confirmEmail,this.InscriptionForm.value.password,this.InscriptionForm.value.confirmPassword).subscribe((data) => {
            this.router.navigateByUrl("/")
    }, (err) => {
      this.messageError = err.message;
      this.openSnackBar(this.messageError, "Compris!")
          })
    } else {
      this.messageError = "Tout les champs sont requis pour l'inscription"
      this.openSnackBar(this.messageError, "Compris!")
    }
  }

  onBackHome() {
    this.router.navigateByUrl("/")
  }

  openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
  }
}
