export interface ITransferencia{
  agenciaOrigem: string | null | undefined;
  numeroContaOrigem: string | null | undefined;
  agenciaDestino: string | null | undefined;
  numeroContaDestino: string | null | undefined;
  valor: number;
}
