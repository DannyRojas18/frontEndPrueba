import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {

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

  }

  Guardar() {
    this.pedido.estadopedido = "Creado";
    this.service.createPedido(this.pedido).subscribe(
      data => {
        alert("Pedido creado con exito.");
        this.router.navigate(["listarPedido"]);
      },
      err => {
        console.log(err);
      }
    )
  }

}
