import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendPrubaTecnica';

  constructor(private router:Router){}

  ListarPedido(){
    this.router.navigate(["listarPedido"]);
  }

  ListarProducto(){
    this.router.navigate(["listarProducto"]);
  }

  ListarProveedores(){
    this.router.navigate(["listarProveedor"]);
  }
}
