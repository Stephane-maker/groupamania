
import { GroupamaniaGeneralPost } from '../../../core/models/groupamania-post.model';
import { GroupamaniaService } from '../../../core/service/groupamania.service';

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groupamania',
  templateUrl: './groupamania.component.html',
  styleUrls: ['./groupamania.component.scss']
})
export class GroupamaniaComponent implements OnInit {

  Posts$!: Observable<GroupamaniaGeneralPost[]>

  constructor(private groupamaniaService: GroupamaniaService ){}
  ngOnInit(): void {
    this.Posts$ = this.groupamaniaService.getAllPost();
 }
}
