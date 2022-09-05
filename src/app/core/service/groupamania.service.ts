import { CreatePost } from './../models/create-post.model';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from "../models/groupamania-post.model";
import { GroupamniaServiceConnexionUser } from "../models/user-connexion.model";
import { UserToken } from "../models/user-token.model";




@Injectable({
  providedIn: 'root'
})
export class GroupamaniaService  {
  constructor(private http: HttpClient) { }

  getAllPost(): Observable<GroupamaniaGeneralPost[]>{
    return this.http.get<GroupamaniaGeneralPost[]>('http://localhost:3000/api/allPost');
  }

  getPostById(_id: string): Observable<GroupamaniaGeneralPost>{
    console.log(_id)
    return this.http.get<GroupamaniaGeneralPost>(`http://localhost:3000/api/allPost/${_id}`);
  }

  InscriptionUser(email: string, password: string ): Observable<GroupamniaServiceConnexionUser>{
    return this.http.post<GroupamniaServiceConnexionUser>("http://localhost:3000/api/auth/signup", { email, password })
      .pipe(
        catchError(this.handleError)
    )
  }

    ConnexionUser(email: string, password: string): Observable<UserToken>{
    return this.http.post<UserToken>("http://localhost:3000/api/auth/login", { email, password  })
      .pipe(
        catchError(this.handleError)
    )
  }


  PostImage(formPost: any): Observable<GroupamaniaGeneralPost>{
    return this.http.post<any>("http://localhost:3000/api/createdPost", formPost )
      .pipe(
        catchError(this.handleError)
    )
  }

  ModifyPost(id: string, formPost: any): Observable<GroupamaniaGeneralPost>{
      console.log(id)
    return this.http.post<any>(`http://localhost:3000/api/modifyPost/${id}`, formPost )
      .pipe(
        catchError(this.handleError)
    )
  }


 deletePost(id: string, ImageUrl: string): Observable<unknown> {
   const url = `http://localhost:3000/api/deletePost/${id}` ; // DELETE api/heroes/42
  return this.http.post(url, {"id": id , "ImageUrl": ImageUrl})
    .pipe(
      catchError(this.handleError)
    );
}

  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
     return throwError(() => new Error('Something bad happened; please try again later.'));
}

}

