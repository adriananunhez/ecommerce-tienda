import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  productosCarritoArray:any = []
  totalCarrito:number = 0;

  constructor(public http:Http, public router:Router) {

  }

  getProducto( cod:string ){
    return this.http.get(`https://examen-bd.firebaseio.com/productos/${ cod }.json`);
  }

  cargarCarrito( producto:any ){
    this.totalCarrito = this.totalCarrito + producto.subtotal;
    this.productosCarritoArray.push(producto);
  }

  obtenerCarrito(){
    return this.productosCarritoArray;
  }

  actualizarProducto(productosCarritoJSON){
    console.log(productosCarritoJSON.length);
    for(let i=0; i<productosCarritoJSON.length; i++){
      let cod = productosCarritoJSON[i].producto.cod;
      console.log("codigo: "+cod)
      let unidadDisponible = productosCarritoJSON[i].unidadDisponible;
      let data = {
        unidad_disponible : unidadDisponible
      }

      this.http.patch(`https://examen-bd.firebaseio.com/productos/${ cod }.json`,JSON.stringify(data)).subscribe(()=>{
          this.productosCarritoArray = [];
          this.router.navigate(['/vista-principal'])
      });
    }

  }

}
