import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupamaniaService } from '../../../core/service/groupamania.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {
  faXmark = faXmark;
  faTrash = faTrash;
  ModifyInput!: FormGroup
  thePost!: string;
  userIdPoster!: string;
  IdToPost!: string;
  ImageUrl!: string;
  IdUser!: any;
  actionButtonDelete!: boolean;
  actionModify!: boolean;
   images!: any;

  constructor(private gs: GroupamaniaService, private router: Router , private fb: FormBuilder) { }
  ngOnInit(): void {

    this.actionButtonDelete = false;
    this.actionModify = false;

    this.ModifyInput = this.fb.group({
      textModify: [null, Validators.required]
    })

    this.IdToPost = document.location.href.split("/")[6];

    this.gs.getPostById(this.IdToPost).subscribe(data => {
      this.thePost = data.post
      this.userIdPoster = data.userIdPoster
      this.ImageUrl = data.ImageUrl
    })
    this.IdUser = localStorage.getItem("ID")
  }

  onDeletePost() {
    this.actionButtonDelete = true;
  }

  onStopDelete() {
    this.actionButtonDelete = false;
  }

  onConfirmaDelete() {
    this.gs.deletePost(this.IdToPost).subscribe((data) => {
      console.log(data)
      this.router.navigateByUrl("groupamania/accueille")
      }, (err) => {
        console.log(err)
    })
  }

  onModifyPost() {
    this.actionModify = true;
  }

  onStopModify() {
     this.actionModify = false;
  }

  onPostModify(): void {
      console.log(this.ModifyInput.value.textModify)
    const formdata = new FormData()
    formdata.append('image', this.images)
    if (this.ModifyInput.value.textModify != null) {
      formdata.append('post', this.ModifyInput.value.textModify)
    }
    this.gs.ModifyPost(this.IdToPost, formdata).subscribe((data) => {
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

   onModify() {
    this.actionModify = true
  }

  onBackHome() {
    this.router.navigateByUrl("groupamania/accueille")
  }

}
