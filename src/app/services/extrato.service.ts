import { IextratoPeriodo } from './../interfaces/extratoPeriodo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IExtrato } from '../interfaces/extrato';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTransacoesPorPeriodo(extratoPeriodo: IextratoPeriodo) {
    return this.http.post<IExtrato[]>(`${this.api}/${this.endpoint}extrato/`,extratoPeriodo);
  }

}
