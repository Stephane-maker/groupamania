import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';

@Component({
  selector: 'app-sign-in-login',
  templateUrl: './sign-in-login.component.html',
  styleUrls: ['./sign-in-login.component.scss']
})
export class SignInLoginComponent implements OnInit{
  connexionForm!: FormGroup;
  messageError!: string;

  ngOnInit(): void {
    this.connexionForm = this.fb.group({
       email: [null, Validators.required],
       password: [null, Validators.required],
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  hasUnitNumber = false;
  constructor(private fb: FormBuilder, private gs: GroupamaniaService,private router:Router, private _snackBar: MatSnackBar) { }

  onConnexion() {
   if (this.connexionForm.valid) {
    this.gs.ConnexionUser(this.connexionForm.value.email, this.connexionForm.value.password).subscribe((data) => {
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("ID", data.userId);
      localStorage.setItem("adminRight", JSON.stringify(data.adminRight));
      this.openSnackBar(data.message, "compris!")
      if (localStorage.getItem("access_token") === data.token && localStorage.getItem("ID") === data.userId ) {
        this.router.navigateByUrl("groupamania/accueille");
      }
    }, (err) => {
      this.messageError = err.message
      this.openSnackBar(this.messageError, "compris!")
  })
    } else {
    this.messageError = "Tout les champs sont obligatoire pour la connexion";
      this.openSnackBar(this.messageError, "compris!")
  }
}
  onBackHome() {
    this.router.navigateByUrl("/")
  }
    openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
