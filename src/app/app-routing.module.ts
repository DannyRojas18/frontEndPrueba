import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPedidoComponent } from './Pedido/agregar-pedido/agregar-pedido.component';
import { EditarPedidoComponent } from './Pedido/editar-pedido/editar-pedido.component';
import { ListarPedidoComponent } from './Pedido/listar-pedido/listar-pedido.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { AgregarPrveedorComponent } from './Proveedor/agregar-prveedor/agregar-prveedor.component';
import { EditarPrveedorComponent } from './Proveedor/editar-prveedor/editar-prveedor.component';
import { ListarPrveedorComponent } from './Proveedor/listar-prveedor/listar-prveedor.component';


const routes: Routes = [

  {path:'agregarPedido', component:AgregarPedidoComponent},
  {path:'editarPedido', component:EditarPedidoComponent},
  {path:'listarPedido', component:ListarPedidoComponent},

  {path:'agregarProducto', component:AgregarProductoComponent},
  {path:'editarProducto', component:EditarProductoComponent},
  {path:'listarProducto', component:ListarProductoComponent},

  {path:'agregarProveedor', component:AgregarPrveedorComponent},
  {path:'editarProveedor', component:EditarPrveedorComponent},
  {path:'listarProveedor', component:ListarPrveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
