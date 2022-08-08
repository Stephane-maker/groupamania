import { HttpClient } from '@angular/common/http';
import { GroupamaniaGeneralPost } from './../models/groupamania-post.model';
import { Observable } from 'rxjs';
import { GroupamaniaService } from './../service/groupamania.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {
  ArrayToOnePostGroupamania!: [];
  OnePostGroupamania!: string;
  IdToPost!: string;

  constructor(private groupamaniaService: GroupamaniaService, private http: HttpClient) { }
  ngOnInit(): void {
    this.IdToPost = document.location.href.split("/")[4];
    this.http.get<any>('http://localhost:3000/api/allPost/' + this.IdToPost).subscribe(data => {
      this.ArrayToOnePostGroupamania = data

    for (let i = 0; i < this.ArrayToOnePostGroupamania.length; i++) {
      const element = this.ArrayToOnePostGroupamania[i];
      return this.OnePostGroupamania = element["post"];
    }
      return this.ArrayToOnePostGroupamania
})

  }

}
