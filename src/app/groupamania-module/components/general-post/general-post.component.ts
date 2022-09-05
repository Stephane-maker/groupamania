import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from '../../../core/models/groupamania-post.model';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-general-post',
  templateUrl: './general-post.component.html',
  styleUrls: ['./general-post.component.scss']
})
export class GeneralPostComponent implements OnInit {
   faXmark = faXmark;
  tokenLocalStorage!: any;
  localStorageAdminRight!: any;
  userId!: any;
  actionButtonDelete!: boolean;
  actionModify!: boolean;
  localStorageAdminRightParse!: boolean;
  images!: any;

  ModifyInput!: FormGroup;

  @Input() post!: GroupamaniaGeneralPost;
  constructor(private router: Router, private gs : GroupamaniaService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.ModifyInput = this.fb.group({
      textModify: [null, Validators.required]
    });
    this.tokenLocalStorage = localStorage.getItem("access_token");
    this.userId = localStorage.getItem("ID");
    this.localStorageAdminRight = localStorage.getItem("adminRight")
    this.localStorageAdminRightParse = JSON.parse(this.localStorageAdminRight)

    this.actionButtonDelete = false;
    this.actionModify = false;

  }


  onPostById() {
    this.router.navigateByUrl(`groupamania/accueille/post/${this.post._id}`);
    console.log(this.post)
    return this.post._id
  }
  onDeletePost() {
    this.actionButtonDelete = true
  }
  onModify() {
    this.actionModify = true
  }
  onConfirmaDelete(id:any) {
    console.log(id)
    this.gs.deletePost(id , this.post.ImageUrl).subscribe((data) => {
      console.log(data)
      window.location.reload();
    }, (err) => {
      console.error(err)
    })
  }
  onStopModify() {
    this.actionModify = false;
  }
  onStopDelete() {
    this.actionButtonDelete = false;
  }

  onPostModify(): void {
    const formdata = new FormData()
    formdata.append('image', this.images)
    if (this.ModifyInput.value.textModify != null) {
      formdata.append('post', this.ModifyInput.value.textModify)
    }
    console.log((this.ModifyInput.value.textModify))
    this.gs.ModifyPost(this.post._id, formdata).subscribe((data) => {
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
