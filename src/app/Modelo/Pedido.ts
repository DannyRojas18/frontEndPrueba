import { Producto } from './Producto';
import { Proveedor } from './Proveedor';

export class Pedido {
    idPedidos: number;
    estadopedido: string;
    fechaPedido: Date;
    cantidad: number;
    cantidad1: number;
    cantidad2: number;
    cantidad3: number;
    cantidad4: number;
    productosidproducto: Producto;
    productosidproducto1: Producto;
    productosidproducto2: Producto;
    productosidproducto3: Producto;
    productosidproducto4: Producto;
    proveedoresidproveedor: Proveedor;

}