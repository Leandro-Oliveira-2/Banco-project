export interface ICliente {
  id?: number;
  cpf:  string | null;
  email: string;
  nome: string ;
  observacoes?: string | null;
  ativo?: boolean;
}
