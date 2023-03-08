import { IDeposito } from './../interfaces/deposito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class depositoService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  depositar(deposito: IDeposito) {
    return this.http.put<void>(`${this.api}/${this.endpoint}deposito`,deposito);
  }

}
