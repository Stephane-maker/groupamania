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
  constructor(private fb: FormBuilder, private gs: GroupamaniaService,private router:Router) { }

  onConnexion() {
    this.gs.ConnexionUser(this.connexionForm.value.email, this.connexionForm.value.password).subscribe((data) => {
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("ID", data.userId);
      console.log(data)
      localStorage.setItem("adminRight", JSON.stringify(data.adminRight))

      if (localStorage.getItem("access_token") === data.token && localStorage.getItem("ID") === data.userId) {
        this.router.navigateByUrl("groupamania/accueille");
      }
    }, (err) => {
      console.log(err.message)

    })
  }
  onBackHome() {
    this.router.navigateByUrl("/")
  }

}
