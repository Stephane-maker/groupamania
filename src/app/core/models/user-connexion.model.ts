export class GroupamniaServiceConnexionUser {


  constructor(
    public email: string,
    public confirmEmail: string,
    public password: string,
    public confirmPassword: string,
    public firstName : string,
    public lastName: string,
    public message: string
  ) {

  }
}
