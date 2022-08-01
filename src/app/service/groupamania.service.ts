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
      LastName: 'Dupont',
      ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      PostGroupamania: "Je suis un nounours",
    },
    {
      FirstName: 'Dylan',
      LastName: 'Jean',
      ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      PostGroupamania:"Un endroit magnifique pour les randonnées.",
    },
    {
      FirstName: 'Guillaume',
      LastName: 'Martin ',
      ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      PostGroupamania: "Mmmh que c\'est bon !",
    },
    {
      FirstName: 'Archibald',
      LastName: 'Richard ',
      ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      PostGroupamania: "Mon meilleur ami depuis tout petit !",
    },
    {
      FirstName: 'Clothilde',
      LastName: 'Dubois',
      ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      PostGroupamania: "Un endroit magnifique pour les randonnées.",
    },
    {
      FirstName: 'Ludovic',
      LastName: 'Durand ',
      ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      PostGroupamania: "un bon repas dans un restaurant cosi",
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

