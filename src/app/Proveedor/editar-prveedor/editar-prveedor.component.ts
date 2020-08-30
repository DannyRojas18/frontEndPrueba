import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Proveedor } from 'src/app/Modelo/Proveedor';

@Component({
  selector: 'app-editar-prveedor',
  templateUrl: './editar-prveedor.component.html',
  styleUrls: ['./editar-prveedor.component.css']
})
export class EditarPrveedorComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProveedorId(+id).subscribe(data=>{
      this.proveedor=data;
    })
  }

  Actualizar(proveedor:Proveedor){
    this.service.updateProveedor(proveedor).subscribe(data=>{
      this.proveedor=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listarProveedor"]);
    })
  }

}
