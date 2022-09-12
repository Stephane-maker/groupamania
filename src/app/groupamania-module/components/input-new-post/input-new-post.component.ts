import { GroupamaniaGeneralPost } from './../../../core/models/groupamania-post.model';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-new-post',
  templateUrl: './input-new-post.component.html',
  styleUrls: ['./input-new-post.component.scss']
})
export class InputNewPostComponent {
   @Input() post!: GroupamaniaGeneralPost;
  title = 'fileUpload';
  images!: "";
  userId: any;
  multipleImages = [];

  addressForm = this.fb.group({
    firstName: ["", Validators.required],

  });

  constructor(private fb: FormBuilder, private gs: GroupamaniaService) { }

  onSubmit(): void {

    const formdata = new FormData()
    formdata.append('image', this.images)
    if (this.addressForm.value.firstName != null) {
      formdata.append('post', this.addressForm.value.firstName)
    }
    this.userId = localStorage.getItem("ID")
    formdata.append("id" ,  this.userId)
    this.gs.PostImage(formdata).subscribe((data) => {
      console.log(data)
        window.location.reload();
    }, (err) => {
      console.log(err)
    })

}
  fileChoosen(event: any) {
    console.log(event.target.value)
    if (event.target.value) {
      const file = event.target.files[0];
      this.images = file
    }
  }
}
