import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { Producto } from 'src/app/Modelo/Producto';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  proveedores: Proveedor[];
  productos: Producto[];

  pedido: Pedido = new Pedido();

  constructor(private router: Router, private service: ServiceService) { }


  ngOnInit(): void {

    this.service.getProveedor()
      .subscribe(data => {
        this.proveedores = data;
      });

    this.service.getProducto()
      .subscribe(data => {
        this.productos = data;
      });

    this.Editar();

  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPedidoId(+id).subscribe(data => {
      this.pedido = data;
    })
  }

  Guardar() {
    this.router.navigate(["listarPedido"]);
  }

  Atras() {

  };

}
