import { Router } from '@angular/router';
import { GroupamaniaGeneralPost } from './../models/groupamania-post.model';
import { GroupamaniaService } from './../service/groupamania.service';

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
