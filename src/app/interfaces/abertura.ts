import { IExtrato } from './extrato';
import { ICliente } from 'src/app/interfaces/cliente';

export interface IAbertura {
    agencia: string | null;
    cliente: ICliente;
    numero: string | null;
    saldo: Number;
    transacoes: any[];
}
