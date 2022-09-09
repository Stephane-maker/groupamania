
export class GroupamaniaGeneralPost {


  constructor(
    public _id: string,
    public post: string,
    public date: string,
    public ImageUrl: string,
    public userIdPoster: string,
    public message: string,
    public like: Array<any>,
    public nbrLike : number
  ) {

  }
}
