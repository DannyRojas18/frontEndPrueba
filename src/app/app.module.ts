import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPedidoComponent } from './Pedido/listar-pedido/listar-pedido.component';
import { AgregarPedidoComponent } from './Pedido/agregar-pedido/agregar-pedido.component';
import { EditarPedidoComponent } from './Pedido/editar-pedido/editar-pedido.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { AgregarPrveedorComponent } from './Proveedor/agregar-prveedor/agregar-prveedor.component';
import { ListarPrveedorComponent } from './Proveedor/listar-prveedor/listar-prveedor.component';
import { EditarPrveedorComponent } from './Proveedor/editar-prveedor/editar-prveedor.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarPedidoComponent,
    AgregarPedidoComponent,
    EditarPedidoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    AgregarPrveedorComponent,
    ListarPrveedorComponent,
    EditarPrveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
