import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id).subscribe(data=>{
      this.producto=data;
    })
  }

  Actualizar(producto:Producto){
    this.service.updateProducto(producto).subscribe(data=>{
      this.producto=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listarProducto"]);
    })
  }

}
