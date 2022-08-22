import { AdminServiceService } from 'src/app/core/service/admin-service.service';
import { Observable } from 'rxjs';
import { GroupamaniaGeneralPost } from '../../../../core/models/groupamania-post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-all-post',
  templateUrl: './admin-all-post.component.html',
  styleUrls: ['./admin-all-post.component.scss']
})
export class AdminAllPostComponent implements OnInit {
  AdminDataAllPost$!: Observable<GroupamaniaGeneralPost[]>

  constructor(private adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
     this.AdminDataAllPost$ = this.adminServiceService.getAllPost();
  }

}
