import { faXmark, faTrash, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
  faThumbsUp = faThumbsUp;
  ModifyInput!: FormGroup
  thePost!: string;
  userIdPoster!: any;
  IdToPost!: string;
  ImageUrl!: string;
  IdUser!: any;
  actionButtonDelete!: boolean;
  actionModify!: boolean;
  images!: any;
  like!: Array<unknown>
  nbrLike!: number;
  toggle = true;
  status = 'Enable';

  constructor(private gs: GroupamaniaService, private router: Router , private fb: FormBuilder) { }
  ngOnInit(): void {

    this.actionButtonDelete = false;
    this.actionModify = false;

    this.ModifyInput = this.fb.group({
      textModify: ["", Validators.required]
    })

    this.IdToPost = document.location.href.split("/")[6];

    this.gs.getPostById(this.IdToPost).subscribe(data => {

      this.like = data.like;
      this.nbrLike = this.like.length;
      this.thePost = data.post
      this.userIdPoster = data.userIdPoster
      this.ImageUrl = data.ImageUrl;

    if (this.like.includes(localStorage.getItem("ID"))) {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
    } else {
      this.toggle = this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
    }
    })
    this.IdUser = localStorage.getItem("ID");
  }

  onDeletePost() {
    this.actionButtonDelete = true;
  }

  onStopDelete() {
    this.actionButtonDelete = false;
  }

  onConfirmaDelete() {
    this.gs.deletePost(this.IdToPost).subscribe((data) => {
      this.router.navigateByUrl("groupamania/accueille")
      }, (err) => {
        console.log(err.message)
    })
  }

  onModifyPost() {
    this.actionModify = true;
  }

  onStopModify() {
    this.actionModify = false;
  }

  onPostModify(): void {
    const formdata = new FormData()
    formdata.append('image', this.images)
    if (this.ModifyInput.value.textModify != null) {
      formdata.append('post', this.ModifyInput.value.textModify)
    }
    this.gs.ModifyPost(this.IdToPost, formdata).subscribe((data) => {
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

  onModify() {
    this.actionModify = true
  }

  onBackHome() {
    this.router.navigateByUrl("groupamania/accueille")
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    if (!this.like.includes(localStorage.getItem("ID"))) {
      this.nbrLike += 1;
      this.like.push(localStorage.getItem("ID"))
    } else {
      this.nbrLike -= 1;
      this.like.splice(this.userIdPoster)
    }
  this.status = this.toggle ? 'Enable' : 'Disable';
  this.gs.LikePost(this.IdToPost, this.userIdPoster).subscribe((data) => {
  })
}
}
