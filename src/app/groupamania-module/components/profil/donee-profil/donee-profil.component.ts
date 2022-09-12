import { GroupamaniaService } from './../../../../core/service/groupamania.service';
import { Observable } from 'rxjs';
import { GroupamaniaGeneralPost } from './../../../../core/models/groupamania-post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donee-profil',
  templateUrl: './donee-profil.component.html',
  styleUrls: ['./donee-profil.component.scss']
})
export class DoneeProfilComponent implements OnInit {

 Posts$!: Observable<GroupamaniaGeneralPost[]>
  constructor(private gs: GroupamaniaService) { }

  ngOnInit(): void {
    this.gs.TokenVerif()
    this.Posts$ = this.gs.UserPost();
  }

}
