import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from "./../models/groupamania-post.model";

@Injectable({
  providedIn: 'root'
})
export class GroupamaniaService implements OnInit {

  constructor(private http: HttpClient) { }
  Post: GroupamaniaGeneralPost[] = [];
  PostById!: GroupamaniaGeneralPost;
  test!: string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.test = "hello";
  }
  getAllPost(): Observable<GroupamaniaGeneralPost[]>{
    return this.http.get<GroupamaniaGeneralPost[]>('http://localhost:3000/api/allPost');
  }
  getPostById(_id: string): Observable<GroupamaniaGeneralPost>{
    console.log(_id)
    return this.http.get<GroupamaniaGeneralPost>(`http://localhost:3000/api/allPost/${_id}`);
  }

}

