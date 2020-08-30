import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Modelo/Proveedor';

@Component({
  selector: 'app-agregar-prveedor',
  templateUrl: './agregar-prveedor.component.html',
  styleUrls: ['./agregar-prveedor.component.css']
})
export class AgregarPrveedorComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createProveedor(this.proveedor).subscribe(data => {
      alert("Se agrego el proveedor con exito");
      this.router.navigate(["listarProveedor"]);
    })
  }

}
