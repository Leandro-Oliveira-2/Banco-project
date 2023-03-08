import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContasComponent } from './pages/contas/contas.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { ExtratoComponent } from './pages/contas/extrato/extrato.component';
import { DepositoComponent } from './pages/contas/deposito/deposito.component';
import { SaqueComponent } from './pages/contas/saque/saque.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CadastrarEditarComponent } from './pages/clientes/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    HeaderComponent,
    ContasComponent,
    FooterComponent,
    ExtratoComponent,
    DepositoComponent,
    SaqueComponent,
    CadastrarEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
