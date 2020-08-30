import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createProducto(this.producto).subscribe(data => {
      alert("Se agrego el producto con exito");
      this.router.navigate(["listarProducto"]);
    })
  }

}
