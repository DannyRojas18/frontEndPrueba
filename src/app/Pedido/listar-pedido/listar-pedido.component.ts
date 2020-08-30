import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/Modelo/Pedido';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  pedidos: Pedido[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getPedido().subscribe(data=>{
      this.pedidos=data;
    })
  }

  Nuevo(){
    this.router.navigate(["agregarPedido"]);
  }

  Editar(pedido: Pedido):void{
    localStorage.setItem("id",pedido.idPedidos.toString());
    this.router.navigate(["editarPedido"]);
  }

  Eliminar(pedido: Pedido){
    this.service.deletePedido(pedido).subscribe(data=>{
      this.pedidos=this.pedidos.filter(p=>p!==pedido);
      alert("Producto eliminado");
    })
  }

}
