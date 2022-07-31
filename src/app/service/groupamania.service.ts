import { Injectable, OnInit } from '@angular/core';
import { GroupamaniaGeneralPost } from "./../models/groupamania-post.model";

@Injectable({
  providedIn: 'root'
})
export class GroupamaniaService implements OnInit {

  constructor() { }
 Post: GroupamaniaGeneralPost[] = [
    {
      FirstName: 'Archibald',
      LastName: 'Mon meilleur ami depuis tout petit !',
      PostGroupamania: "hey",
      ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
    {
      FirstName: 'Three Rock Mountain',
      LastName: 'Un endroit magnifique pour les randonnées.',
      PostGroupamania:"hey2",
      ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    },
    {
      FirstName: 'Un bon repas',
      LastName: 'Mmmh que c\'est bon !',
      PostGroupamania: "hey3",
      ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    },
    {
      FirstName: 'Archibald',
      LastName: 'Mon meilleur ami depuis tout petit !',
      PostGroupamania: "hey4",
      ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
    {
      FirstName: 'Three Rock Mountain',
      LastName: 'Un endroit magnifique pour les randonnées.',
      PostGroupamania: "hey5",
      ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    },
    {
      FirstName: 'Un bon repas',
      LastName: 'Mmmh que c\'est bon !',
      PostGroupamania: "hey6",
      ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    }
  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  getAllPost(): GroupamaniaGeneralPost[]{
    return this.Post;
  }

}

