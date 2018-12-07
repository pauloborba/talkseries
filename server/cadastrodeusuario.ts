import { User } from '../talk-series/src/app/user';

export class CadastroDeUsuarios {
  usuarios: User[] = [];

  criar(usuario: User) User;

  usernameNaoCadastrado(username: string) boolean;

  atualizar(usuario: User) User;

  getUsuarios(): User[];
}
