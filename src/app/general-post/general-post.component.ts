import { GroupamaniaService } from './../service/groupamania.service';

import { Component, Input, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from '../models/groupamania-post.model';

@Component({
  selector: 'app-general-post',
  templateUrl: './general-post.component.html',
  styleUrls: ['./general-post.component.scss']
})
export class GeneralPostComponent implements OnInit {
  @Input() post!: GroupamaniaGeneralPost;
  constructor(private groupamaniaService:GroupamaniaService) { }

  ngOnInit(): void {
    console.log(this.post)
  }

}
