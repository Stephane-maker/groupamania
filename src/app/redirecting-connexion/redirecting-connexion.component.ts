import { Router } from '@angular/router';
import { GroupamaniaService } from './../service/groupamania.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-redirecting-connexion',
  templateUrl: './redirecting-connexion.component.html',
  styleUrls: ['./redirecting-connexion.component.scss']
})
export class RedirectingConnexionComponent{
  addressForm!: FormGroup;
  ngOnInit(): void {
    this.addressForm = this.fb.group({
       email: [null, Validators.required],
       password: [null, Validators.required],
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  hasUnitNumber = false;



  constructor(private fb: FormBuilder, private gs: GroupamaniaService,private router:Router) { }

  onConnexion() {
    this.gs.ConnexionUser(this.addressForm.value.email, this.addressForm.value.password).subscribe((data) => {
      localStorage.setItem("access_token", data.token);
       localStorage.setItem("ID", data.userId);
      console.log(localStorage.getItem("access_token"))
      if (localStorage.getItem("access_token") === data.token && localStorage.getItem("ID") === data.userId) {
        this.router.navigateByUrl("accueille");
      }

    })
  }

}
