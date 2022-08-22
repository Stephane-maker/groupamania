import { GroupamaniaGeneralPost } from './../models/groupamania-post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminModels } from '../models/admin-model.model';



@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

    getAllUser(): Observable<adminModels[]>{
    return this.http.get<adminModels[]>('http://localhost:3000/api/auth/admin/allUser');
    }

    getAllPost(): Observable<GroupamaniaGeneralPost[]>{
    return this.http.get<GroupamaniaGeneralPost[]>("http://localhost:3000/api/allPost")
    }

}
