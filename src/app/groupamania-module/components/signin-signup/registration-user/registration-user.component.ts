import { Router } from '@angular/router';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent {
  addressForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    confirmEmail: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null,Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private gs : GroupamaniaService, private router: Router) {}

  onSubmit(): void {
    if (this.addressForm.value.firstName != null && this.addressForm.value.lastName != null && this.addressForm.value.email != null && this.addressForm.value.confirmEmail != null && this.addressForm.value.password != null && this.addressForm.value.confirmPassword != null && this.addressForm.value.address != null && this.addressForm.value.city != null) {
      if (this.addressForm.value.email === this.addressForm.value.confirmEmail) {
        if (this.addressForm.value.password === this.addressForm.value.confirmPassword) {
          console.log("password ok")
          this.gs.InscriptionUser(this.addressForm.value.email, this.addressForm.value.password).subscribe((data) => {
            console.log(data)
          }, (err) => {
            console.log(err)
          })
      } else {
        console.error("Les mots de passe ne sont pas identique")
      }
        console.log("ok")
    } else {
      console.error("Les emails ne sont pas identique")
    }
    }
    else {
      console.error("Tout les champs sont obligatoire pour l'inscription au reseaux social Groupamania")
    }
  }

  onBackHome() {
    this.router.navigateByUrl("/")
  }
}
