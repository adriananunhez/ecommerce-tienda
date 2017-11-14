import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  constructor(public http:Http) { }

  getProducto( cod:string ){
    return this.http.get(`https://examen-bd.firebaseio.com/productos/${ cod }.json`);
  }

}
