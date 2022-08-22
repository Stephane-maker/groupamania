import { GroupamaniaService } from '../../../core/service/groupamania.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {

  thePost!: string;
  userIdPoster!: string;
  IdToPost!: string;
  IdUser!: any;

  constructor(private groupamaniaService: GroupamaniaService) { }
  ngOnInit(): void {
    this.IdToPost = document.location.href.split("/")[4];

    this.groupamaniaService.getPostById(this.IdToPost).subscribe(data => {
      this.thePost = data.post
      this.userIdPoster = data.userIdPoster
    })
    this.IdUser = localStorage.getItem("ID")
  }

}
