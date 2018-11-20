// unlike last time here we will create this interface class using a a constructor
// this whole thing is very dependent on the name we have given in html tags
export class Employee {
  constructor(
    public firstname: String,
    public lastname: String,
    public email: String,
    public fulltime: Boolean,
    public gender: String,
    public codeLang: String,
  ) {}
}
