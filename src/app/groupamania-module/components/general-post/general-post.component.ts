import { FormBuilder, FormGroup } from '@angular/forms';

import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from '../../../core/models/groupamania-post.model';
import { faXmark, faTrash, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-general-post',
  templateUrl: './general-post.component.html',
  styleUrls: ['./general-post.component.scss']
})
export class GeneralPostComponent implements OnInit {
  faTrash = faTrash
  faXmark = faXmark;
  faThumbsUp = faThumbsUp;
  tokenLocalStorage!: any;
  localStorageAdminRight!: any;
  userId!: any;
  actionButtonDelete!: boolean;
  idUser!:  any;
  actionModify!: boolean;
  localStorageAdminRightParse!: boolean;
  images!: any;
  messageNoPostProfil!: boolean;
  ModifyInput!: FormGroup;
  toggle = true;
  status = 'Enable';

  @Input() post!: GroupamaniaGeneralPost;
  constructor(private router: Router, private gs : GroupamaniaService, private fb: FormBuilder) { }
  ngOnInit(): void {
  this.messageNoPostProfil = false;
  this.gs.TokenVerif()
    this.ModifyInput = this.fb.group({
      textModify: [null]
    });
    this.tokenLocalStorage = localStorage.getItem("access_token");
    this.userId = localStorage.getItem("ID");
    this.localStorageAdminRight = localStorage.getItem("adminRight")
    this.localStorageAdminRightParse = JSON.parse(this.localStorageAdminRight)

    this.actionButtonDelete = false;
    this.actionModify = false;
    if (window.location.href === "http://localhost:4200/groupamania/profil") {
      this.messageNoPostProfil = true;
    }
    if (this.post.post) {
    this.post.nbrLike = this.post.like.length
    if (this.post.like.includes(localStorage.getItem("ID"))) {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
    } else {
      this.toggle = this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
    }
  }
  this.idUser = localStorage.getItem("ID")
  }

  onPostById() {
    this.router.navigateByUrl(`groupamania/accueille/post/${this.post._id}`);
    return this.post._id
  }
  onDeletePost() {
    this.actionButtonDelete = true
  }
  onModify() {
    this.actionModify = true
  }
  onConfirmaDelete(id:any) {
    this.gs.deletePost(id).subscribe((data) => {
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

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    if (!this.post.like.includes(localStorage.getItem("ID"))) {
      this.post.nbrLike += 1;
      this.post.like.push(localStorage.getItem("ID"))
    } else {
      this.post.nbrLike -= 1;
      this.post.like.splice(this.userId)
    }
  this.status = this.toggle ? 'Enable' : 'Disable';
  this.gs.LikePost(this.post._id, this.userId).subscribe((data) => {})
}

  onPostModify(): void {
    const formdata = new FormData()
    formdata.append('image', this.images)
    if (this.ModifyInput.value.textModify != null) {
      formdata.append('post', this.ModifyInput.value.textModify)
    }
    this.gs.ModifyPost(this.post._id, formdata).subscribe((data) => {
      window.location.reload();
    }, (err) => {
      console.log(err)
    })
}
  fileChoosen(event: any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.images = file
    }
  }
}
