export class Usuario {
    nome: string;
    cpf: string;
    email: string;
    telefone: number;
    nasc: Date;
    genero: string;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.email = "";
      this.telefone = 0;
      this.nasc = null;
      this.genero = "";
    }
  
    clone(): Usuario {
      var usuario: Usuario = new Usuario();
      usuario.copyFrom(this);
      return usuario;
    }
  
    copyFrom(from: Usuario): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.email = from.email;
      this.telefone = from.telefone;
      this.nasc = from.nasc;
      this.genero = from.genero;
    }
  
  }