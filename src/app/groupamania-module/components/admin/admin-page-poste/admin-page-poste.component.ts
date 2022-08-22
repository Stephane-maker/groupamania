import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GroupamaniaGeneralPost } from '../../../../core/models/groupamania-post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-page-poste',
  templateUrl: './admin-page-poste.component.html',
  styleUrls: ['./admin-page-poste.component.scss']
})
export class AdminPagePosteComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;
  @Input() dataAdminPost!: GroupamaniaGeneralPost;

  constructor() {}

  ngOnInit(): void {
  }
  onclick() {
    alert("Vous êtes sur le point de supprimer ce poste êtes vous vraiment sur de vouloir supprimer ce post de facon definitive ? <button>hey</button>")
  }
}
