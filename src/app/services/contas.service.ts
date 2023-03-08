import { IAbertura } from './../interfaces/abertura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarConta(abertura: IAbertura) {
    return this.http.post(`${this.api}/${this.endpoint}`, abertura);
  }

  atualizarConta(conta: IAbertura, id:number) {
    return this.http.put(`${this.api}/${this.endpoint}/${id}`, conta);
  }

  buscarConta(id:number) {
    return this.http.get<IAbertura>(`${this.api}/${this.endpoint}/${id}`);
  }

  buscarContaPorAgencia(agencia: String, numeroConta: String){
    return this.http.get<Number>(`${this.api}/${this.endpoint}/buscarPorCpf/${agencia}/${numeroConta}`);
  }
}
