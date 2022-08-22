import { GroupamaniaGeneralPost } from '../../../../core/models/groupamania-post.model';
import { GroupamaniaService } from 'src/app/core/service/groupamania.service';

import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';

import { adminModels } from 'src/app/core/models/admin-model.model';
import { AdminServiceService } from 'src/app/core/service/admin-service.service';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit  {

  @Input() dataAdmin!: adminModels;

  constructor() { }

  ngOnInit(): void {
  }



}
