export class Show {
    name: string;
    sinopse: string;
    channel: string;
    id: number;
    release: Date;
    genre: string;

    constructor() {
      this.clean();
    }

    clean(): void {
      this.name = "";
      this.sinopse = "";
      this.channel = "";
      this.id = 0;
      this.release = null;
      this.genre = "";
    }

    clone(): Show {
      var show: Show = new Show();
      show.copyFrom(this);
      return show;
    }

    copyFrom(from: Show): void {
      this.name = from.name;
      this.sinopse = from.sinopse;
      this.channel = from.channel;
      this.id = from.id;
      this.release = from.release;
      this.genre = from.genre;
    }
}
