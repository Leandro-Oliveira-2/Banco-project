import { ISaque } from './../interfaces/saque';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class saqueService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }
  sacar(saque: ISaque) {
    return this.http.put<void>(`${this.api}/${this.endpoint}sacar`,saque);
  }

}
