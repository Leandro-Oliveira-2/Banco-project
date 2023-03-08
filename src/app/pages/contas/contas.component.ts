import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';
import { AlertasService } from './../../services/alertas.service';
import { IAbertura } from './../../interfaces/abertura';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  @BlockUI() BlockUI!: NgBlockUI;
  constructor(private contasService: ContasService,
    private clienteService: ClientesService,
    private alertaService: AlertasService,
    private router: Router) { }
  conta: any;
  ag: any
  contas: IConta[] = [];
  body: any;

  gerador2:number = this.gerador(1000,9999);
  gerador3:number = this.gerador(0,9);
  p: number = 1;
  idSelecionado: number = 0;
  ngOnInit(): void {

    this.buscarTodasContas();

  }

  gerador(a:number,b:number){
    return Math.floor(Math.random() * (b -a + 1)) + a
  }

  cadastroForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
  });

  atualizarForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    conta: new FormControl('', Validators.required),
  })

  buscarTodasContas() {
    this.contasService.listarTodasContas().subscribe((contas: IConta[]) => {
      this.contas = contas;
      this.contas =this.contas.filter((conta)=>{
       return conta.cliente
      })
      console.log(this.contas)
    });
  }

  atualizar(){
    this.conta.agencia = this.atualizarForm.value.agencia;
    this.conta.numero= this.atualizarForm.value.conta;
    this.contasService.atualizarConta(this.conta,this.idSelecionado).subscribe((response)=>{
      console.log(response);
      this.alertaService.alertaSucesso('MUITO BOM, ATUALIZADO!');
    })
  }

  fecharModal(){
    this.router.navigateByUrl('/contas');
  }

  adicionarIdRota(id: number){

    this.router.navigateByUrl('/contas/' + id);
    this.idSelecionado = id
    this.contasService.buscarConta(this.idSelecionado).subscribe((response)=>{
      this.conta = response;
      this.atualizarForm.setValue({
        agencia: response.agencia,
        conta: response.numero
      });

    });
  }



  cadastrar(){
    this.clienteService.buscarClientePorCpf(this.cadastroForm.value.cpf).subscribe((cliente)=>{
      this.body = {
        agencia: this.cadastroForm.value.agencia,
        cliente,
        numero: this.gerador2 +"-"+ this.gerador3,
        saldo: 0,
        transacoes: []
      }
      this.contasService.cadastrarConta(this.body as IAbertura).subscribe((response)=>{
        console.log(response);
        this.alertaService.alertaSucesso('Muito bom! conta aberta com sucesso!');
        this.router.navigateByUrl('/contas');
      });

     });
  }


}
