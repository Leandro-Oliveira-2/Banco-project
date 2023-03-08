import { TransferenciaComponent } from './pages/contas/transferencia/transferencia.component';
import { SaqueComponent } from './pages/contas/saque/saque.component';
import { DepositoComponent } from './pages/contas/deposito/deposito.component';
import { ExtratoComponent } from './pages/contas/extrato/extrato.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarComponent } from './pages/clientes/cadastro/cadastro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'contas', component: ContasComponent
  },
  {
    path: 'clientes/cadastro', component: CadastrarEditarComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastrarEditarComponent
  },
  {
    path: 'contas/extrato', component: ExtratoComponent
  },
  {
    path: 'contas/deposito', component: DepositoComponent
  },
  {
    path: 'contas/sacar', component: SaqueComponent
  },
  {
    path: 'transferir', component: TransferenciaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
