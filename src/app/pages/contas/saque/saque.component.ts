import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { saqueService } from './../../../services/saque.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  constructor(
    private saqueService: saqueService,
    private Router: ActivatedRoute,
    private alertaService: AlertasService,
    private router: Router) { }

  ngOnInit(): void {
  }
  sacarForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })

  sacar(){
    const saque = {
      agencia: this.sacarForm.value.agencia,
      numeroConta: this.sacarForm.value.numeroConta,
      valor: Number(this.sacarForm.value.valor)
    }
    this.saqueService.sacar(saque).subscribe(()=>{
      this.alertaService.alertaSucesso('Parabéns, saque concluído com sucesso!');
      this.router.navigateByUrl('/clientes');
    });
  }


}
