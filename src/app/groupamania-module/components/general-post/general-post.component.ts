import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupamaniaService } from '../../../core/service/groupamania.service';
import { Router } from '@angular/router';

import { Component, Input, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from '../../../core/models/groupamania-post.model';
import { UserToken } from '../../../core/models/user-token.model';
import { LocalizedString, Token } from '@angular/compiler';


@Component({
  selector: 'app-general-post',
  templateUrl: './general-post.component.html',
  styleUrls: ['./general-post.component.scss']
})
export class GeneralPostComponent implements OnInit {
  tokenLocalStorage!: any;
  userId!: any;

  @Input() post!: GroupamaniaGeneralPost;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tokenLocalStorage = localStorage.getItem("access_token");
    this.userId = localStorage.getItem("ID");
  }


  onPostById() {
    this.router.navigateByUrl("accueille/" + this.post._id);
    return this.post._id
  }
}
