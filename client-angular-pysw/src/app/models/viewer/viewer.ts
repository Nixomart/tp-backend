export class Viewer {
  id!: number;
  name!: string;
  surname!: string;
  dni!: string;
  email!: string;
  constructor(id: number= 0, name: string= '', surname:string= '', dni:string= '',stock:number= 0, email: string = '', salient: boolean = false){
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.dni = dni;
      this.email = email;
  }
}
