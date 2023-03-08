import { IDeposito } from './../../../interfaces/deposito';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AlertasService } from './../../../services/alertas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { depositoService } from 'src/app/services/deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  constructor(
    private depositoService: depositoService,
    private Router: ActivatedRoute,
    private alertaService: AlertasService,
    private router: Router) { }


    depositoForm = new FormGroup({
      agencia: new FormControl('', Validators.required),
      numeroConta: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    })
  ngOnInit(): void {
  }

  depositar(){
    const deposito = {
      agencia: this.depositoForm.value.agencia,
      numeroConta: this.depositoForm.value.numeroConta,
      valor: Number(this.depositoForm.value.valor)
    }
    this.depositoService.depositar(deposito).subscribe(()=>{
      this.alertaService.alertaSucesso('Parabéns, depósito concluído com sucesso!');
      this.router.navigateByUrl('/clientes');
    });

    }
}
