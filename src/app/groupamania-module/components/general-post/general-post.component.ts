import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from '../../../core/models/groupamania-post.model';

@Component({
  selector: 'app-general-post',
  templateUrl: './general-post.component.html',
  styleUrls: ['./general-post.component.scss']
})
export class GeneralPostComponent implements OnInit {
  tokenLocalStorage!: any;
  userId!: any;
  actionButtonDelete!: boolean;

  @Input() post!: GroupamaniaGeneralPost;


  constructor(private router: Router, private gs : GroupamaniaService ) { }

  ngOnInit(): void {
    this.tokenLocalStorage = localStorage.getItem("access_token");
    this.userId = localStorage.getItem("ID");
    console.log(this.post)
    this.actionButtonDelete = false;
  }


  onPostById() {
    this.router.navigateByUrl("accueille/" + this.post._id);
    return this.post._id
  }
  onDeletePost() {
    this.actionButtonDelete = true
  }
  onConfirmaDelete(id:any) {
    console.log(id)
    this.gs.DeletePost(id).subscribe((data) => {
      console.log(data)
      window.location.reload();
    }, (err) => {
      console.error(err)
    })

  }
  onStopDelete() {
     this.actionButtonDelete = false;
  }
}
