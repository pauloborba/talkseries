import { Show } from '../talk-series/src/app/show';

export class CadastroDeSeries {
  serie: Show[] = [];

  criar(serie: Show) Show;

  idNaoCadastrado(id: number) boolean;

  atualizar(serie: Show) Show;

  getSerie(): Show[];
}
