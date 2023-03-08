import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ICliente } from 'src/app/interfaces/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesService } from 'src/app/services/clientes.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @BlockUI() BlockUI!: NgBlockUI;
  public page =10;
  public pageSize = 10;
  p: number = 1;

  constructor(
    private clienteService: ClientesService,
    private alertaService: AlertasService
    ) { }
  clientes: ICliente[] = [];
  ngOnInit(): void {
    this.buscarTodosClientes();
  }

  buscarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe((clientes: ICliente[]) => {
      this.clientes = clientes;
    }, (error) => {
      console.error(error);
    });
  }

  excluir(id?: number) {
    if (id) {
      this.clienteService.excluirClientePorId(id).subscribe(() => {
        this.alertaService.alertaSucesso('Cliente removido com sucesso!');
        this.buscarTodosClientes();
      }, (error) => {
        console.error(error);
      })
      return;
    }
  }

}
