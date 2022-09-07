import { GroupamaniaGeneralPost } from '../../../../core/models/groupamania-post.model';
import { observable, Observable } from 'rxjs';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  @Input() post!: GroupamaniaGeneralPost;
  constructor() { }
  ngOnInit(): void {

  }

}
