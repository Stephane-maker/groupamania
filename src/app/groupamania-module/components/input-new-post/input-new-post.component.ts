import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-new-post',
  templateUrl: './input-new-post.component.html',
  styleUrls: ['./input-new-post.component.scss']
})
export class InputNewPostComponent {

  title = 'fileUpload';
  images!: "";
  multipleImages = [];

  addressForm = this.fb.group({
    firstName: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private gs: GroupamaniaService, private http: HttpClient) { }

  onSubmit(): void {
    console.log(this.images)
   const formdata = new FormData()
    formdata.append('image', this.images)

     this.http.post("http://localhost:3000/api/createdPost" ,formdata).subscribe((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
    } )

  }

  fileChoosen(event: any) {
      const file = event.target.files[0];
    this.images = file
  }
}
