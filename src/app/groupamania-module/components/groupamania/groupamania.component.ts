
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

  constructor(private gs: GroupamaniaService ){}
  ngOnInit(): void {
    this.gs.TokenVerif()
    this.Posts$ = this.gs.getAllPost();

  }
}
