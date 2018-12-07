export class User {
    username: string;
    cpf: string;
    email: string;
    phone: number;
    birth: Date;
    gender: string;

    constructor() {
      this.clean();
    }

    clean(): void {
      this.username = "";
      this.cpf = "";
      this.email = "";
      this.phone = 0;
      this.birth = null;
      this.gender = "";
    }

    clone(): User {
      var user: User = new User();
      user.copyFrom(this);
      return user;
    }

    copyFrom(from: User): void {
      this.username = from.username;
      this.cpf = from.cpf;
      this.email = from.email;
      this.phone = from.phone;
      this.birth = from.birth;
      this.gender = from.gender;
    }
}
