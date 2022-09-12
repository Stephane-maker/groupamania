import { Router } from '@angular/router';
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
  constructor(private http: HttpClient, private router:Router) { }

  getAllPost(): Observable<GroupamaniaGeneralPost[]>{
    return this.http.get<GroupamaniaGeneralPost[]>('http://localhost:3000/api/allPost');
  }

  getPostById(_id: string): Observable<GroupamaniaGeneralPost>{
    return this.http.get<GroupamaniaGeneralPost>(`http://localhost:3000/api/allPost/${_id}`);
  }

  InscriptionUser(email: string, confirmEmail: string, password: string, confirmPassword: string ): Observable<GroupamniaServiceConnexionUser>{
    return this.http.post<GroupamniaServiceConnexionUser>("http://localhost:3000/api/auth/signup", { email, confirmEmail, password, confirmPassword })
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
    return this.http.put<GroupamaniaGeneralPost>(`http://localhost:3000/api/modifyPost/${id}`, formPost )
      .pipe(
        catchError(this.handleError)
    )
  }

deletePost(id: string): Observable<any> {
   const url = `http://localhost:3000/api/deletePost/${id}`;
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  UserPost(): Observable<GroupamaniaGeneralPost[]>{
    return this.http.get<GroupamaniaGeneralPost[]>(`http://localhost:3000/api/userPost` )
      .pipe(
        catchError(this.handleError)
    )
  }

  TokenVerif() {
    if (!localStorage.getItem("ID") && !localStorage.getItem("access_token") && !localStorage.getItem("adminRigth")) {
      this.router.navigateByUrl("/");
    }
  }

  LikePost(id: string, idUser: string): Observable<unknown>{
    return this.http.put<unknown>(`http://localhost:3000/api/like/${id}`, {"id": id, "idUser": idUser} )
      .pipe(
        catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error.message);
  }
  // Return an observable with a user-facing error message.
     return throwError(() => new Error(error.error.message));
}

}

