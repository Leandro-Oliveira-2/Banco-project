export interface ICadastro {
  id?: number;
  cpf:  string | null;
  email: string;
  nome: string;
  observacoes?: string;
  ativo?: boolean;
}
