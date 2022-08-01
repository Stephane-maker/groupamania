import { GroupamaniaGeneralPost } from './../models/groupamania-post.model';
import { GroupamaniaService } from './../service/groupamania.service';

import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-groupamania',
  templateUrl: './groupamania.component.html',
  styleUrls: ['./groupamania.component.scss']
})
export class GroupamaniaComponent implements OnInit {

  Post!: GroupamaniaGeneralPost[];
  constructor(private groupamaniaService: GroupamaniaService){}
 ngOnInit(): void {
   this.Post = this.groupamaniaService.getAllPost();
 }
}
