import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';

@Component({
  selector: 'app-sign-in-login',
  templateUrl: './sign-in-login.component.html',
  styleUrls: ['./sign-in-login.component.scss']
})
export class SignInLoginComponent {
  connexionForm!: FormGroup;
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
      console.log(localStorage.getItem("access_token"))
      if (localStorage.getItem("access_token") === data.token && localStorage.getItem("ID") === data.userId) {
        this.router.navigateByUrl("accueille");
      }
      if (data.adminRight === true) {
        this.router.navigateByUrl("admin_page")
      } else {
        this.router.navigateByUrl("accueille")
      }


    })
  }

}
