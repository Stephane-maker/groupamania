import { HttpClient } from '@angular/common/http';
import { GroupamaniaGeneralPost } from './../models/groupamania-post.model';
import { GroupamaniaService } from './../service/groupamania.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {

  OnePostGroupamania!: GroupamaniaGeneralPost;
  IdToPost!: string;

  constructor(private groupamaniaService: GroupamaniaService, private http: HttpClient) { }
  ngOnInit(): void {
    this.IdToPost = document.location.href.split("/")[4];

    this.groupamaniaService.getPostById(this.IdToPost).subscribe(data => {
      this.OnePostGroupamania = data

    })

  }

}
