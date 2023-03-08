import { ICliente } from "./cliente";

export interface IConta {
  id: number;
  agencia: string | null | undefined;
  cliente: ICliente;
  numero: string;
  saldo: number;
}
