import { ITransferencia } from './../interfaces/transferencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class transferenciaService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  tranferir(transferencia: ITransferencia) {
    return this.http.put(`${this.api}/${this.endpoint}transferencia`,transferencia);
  }

}
