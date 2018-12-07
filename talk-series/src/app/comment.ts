import { Show } from "./show";
import { User } from "./user";

export class Comment {
    content: string;
    show: Show["id"];
    id: number;
    data_post: Date;
    user: User["username"];

    constructor() {
      this.clean();
    }

    clean(): void {
      this.content = "";
      this.show = 0;
      this.id = 0;
      this.data_post = null;
      this.user = "";
    }

    clone(): Comment {
      var comment: Comment = new Comment();
      comment.copyFrom(this);
      return comment;
    }

    copyFrom(from: Comment): void {
      this.content = from.content;
      this.show = from.show;
      this.id = from.id;
      this.data_post = from.data_post;
      this.user = from.user;
    }
}
