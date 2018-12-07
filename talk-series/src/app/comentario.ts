
import { Serie } from "./serie";
import { Usuario } from "./usuario";
export class Comentario {
    conteudo: string;
    serie: Serie["id"];
    id: number;
    data_post: Date;
    usuario: Usuario["cpf"];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.conteudo = "";
      this.serie = 0;
      this.id = 0;
      this.data_post = null;
      this.usuario = "";
    }
  
    clone(): Comentario {
      var comentario: Comentario = new Comentario();
      comentario.copyFrom(this);
      return comentario;
    }
  
    copyFrom(from: Comentario): void {
      this.conteudo = from.conteudo;
      this.serie = from.serie;
      this.id = from.id;
      this.data_post = from.data_post;
      this.usuario = from.usuario;
    }
  
  }