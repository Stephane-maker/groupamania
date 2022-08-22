import { GroupamaniaService } from 'src/app/core/service/groupamania.service';
import { GroupamaniaGeneralPost } from '../../../../core/models/groupamania-post.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { adminModels } from 'src/app/core/models/admin-model.model';
import { AdminServiceService } from 'src/app/core/service/admin-service.service';
@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.scss']
})
export class AdminDataComponent implements OnInit {
AdminData$!: Observable<adminModels[]>

  constructor(private adminServiceService: AdminServiceService ){}
  ngOnInit(): void {

    this.AdminData$ = this.adminServiceService.getAllUser();


 }
 }

