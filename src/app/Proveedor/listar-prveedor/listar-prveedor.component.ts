import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Modelo/Proveedor';


@Component({
  selector: 'app-listar-prveedor',
  templateUrl: './listar-prveedor.component.html',
  styleUrls: ['./listar-prveedor.component.css']
})
export class ListarPrveedorComponent implements OnInit {

  proveedores:Proveedor[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getProveedor().subscribe(data=>{
      this.proveedores=data;
    })
  }

  Nuevo(){
    this.router.navigate(["agregarProveedor"]);
  }

  Editar(proveedor: Proveedor):void{
    localStorage.setItem("id",proveedor.idProveedor.toString());
    this.router.navigate(["editarProveedor"]);
  }

  Eliminar(proveedor: Proveedor){
    this.service.deleteProveedor(proveedor).subscribe(data=>{
      this.proveedores=this.proveedores.filter(p=>p!==proveedor);
      alert("Producto eliminado");
    })
  }

}
