export class Serie {
    nome: string;
    desc: string;
    emissora: string;
    id: number;
    lancamento: Date;
    genero: string;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.desc = "";
      this.emissora = "";
      this.id = 0;
      this.lancamento = null;
      this.genero = "";
    }
  
    clone(): Serie {
      var serie: Serie = new Serie();
      serie.copyFrom(this);
      return serie;
    }
  
    copyFrom(from: Serie): void {
      this.nome = from.nome;
      this.desc = from.desc;
      this.emissora = from.emissora;
      this.id = from.id;
      this.lancamento = from.lancamento;
      this.genero = from.genero;
    }
  
  }