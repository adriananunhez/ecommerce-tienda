import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  productosCarritoJSON:any;
  constructor(public productService:ProductosService) {

    this.productosCarritoJSON = this.productService.obtenerCarrito();
  }

  actualizarProducto(productosCarritoJSON){
    this.productService.actualizarProducto(productosCarritoJSON);
  }

}
