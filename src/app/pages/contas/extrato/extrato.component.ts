import { ContasService } from 'src/app/services/contas.service';
import { IextratoPeriodo } from './../../../interfaces/extratoPeriodo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IExtrato } from './../../../interfaces/extrato';
import { ExtratoService } from './../../../services/extrato.service';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  constructor(
    private ContasService: ContasService,
    private extratoService: ExtratoService,
    private route: ActivatedRoute,
    private alertaService: AlertasService,
    private router: Router
    ) { }


  transacoes: IExtrato[] = [];

  extratoForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    dataInicial: new FormControl('', Validators.required),
    dataFinal: new FormControl('', Validators.required),
  })
  ngOnInit(): void {
  }

  listarTransacoesPorPeriodo() {
    const extratoPeriodo: IextratoPeriodo = this.extratoForm.value as IextratoPeriodo;
    this.extratoService.listarTransacoesPorPeriodo(extratoPeriodo).subscribe((extrato: IExtrato[]) => {
      this.transacoes = extrato;
    }, (error) => {
      console.error(error);
    });
  }

  buscarClientePorAgencia(){

  }

}
