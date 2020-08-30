import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Proveedor } from '../Modelo/Proveedor';
import { Pedido } from '../Modelo/Pedido';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  UrlPedido = 'http://52.204.191.159:8080/pedidos';

  UrlProducto = 'http://52.204.191.159:8080/productos';

  UrlProveedor = 'http://52.204.191.159:8080/proveedors';


  getProducto() {
    return this.http.get<Producto[]>(this.UrlProducto);
  }

  createProducto(producto: Producto) {
    return this.http.post<Producto>(this.UrlProducto, producto);
  }

  getProductoId(id: number) {
    return this.http.get<Producto>(this.UrlProducto + "/" + id);
  }

  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.UrlProducto + "/" + producto.idProducto, producto);
  }

  deleteProducto(producto: Producto) {
    return this.http.delete<Producto>(this.UrlProducto + "/" + producto.idProducto);
  }

  //-----------
  getProveedor() {
    return this.http.get<Proveedor[]>(this.UrlProveedor);
  }

  createProveedor(provedor: Proveedor) {
    return this.http.post<Proveedor>(this.UrlProveedor, provedor);
  }

  getProveedorId(id: number) {
    return this.http.get<Proveedor>(this.UrlProveedor + "/" + id);
  }

  updateProveedor(provedor: Proveedor) {
    return this.http.put<Proveedor>(this.UrlProveedor + "/" + provedor.idProveedor, provedor);
  }

  deleteProveedor(proveedor: Proveedor) {
    return this.http.delete<Proveedor>(this.UrlProveedor + "/" + proveedor.idProveedor);
  }

  //-----------
  getPedido() {
    return this.http.get<Pedido[]>(this.UrlPedido);
  }

  createPedido(pedido: Pedido) {
    return this.http.post<Pedido>(this.UrlPedido, pedido);
  }

  getPedidoId(id: number) {
    return this.http.get<Pedido>(this.UrlPedido + "/" + id);
  }

  updatePedido(pedido: Pedido) {
    return this.http.put<Pedido>(this.UrlPedido + "/" + pedido.idPedidos, pedido);
  }

  deletePedido(pedido: Pedido) {
    return this.http.delete<Pedido>(this.UrlPedido + "/" + pedido.idPedidos);
  }

}