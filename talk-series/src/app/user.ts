export class User {
    username: string;
    password: string;
    moderator: boolean;
    email: string;
    birth: Date;
    gender: string;

    constructor() {
      this.clean();
    }

    clean(): void {
      this.username = "";
      this.password = "";
      this.moderator = false;
      this.email = "";
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
      this.password = from.password;
      this.moderator = from.moderator;
      this.email = from.email;
      this.birth = from.birth;
      this.gender = from.gender;
    }
}
