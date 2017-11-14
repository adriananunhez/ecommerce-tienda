import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://examen-bd.firebaseio.com/.json')
      .map((response: Response)=> response.json())
  }

  getDatosProductos(){
    return this.http.get('https://examen-bd.firebaseio.com/productos.json')
      .map((response: Response)=> response.json())
  }

/*  sendDatos(usuario : any){
    const datos = JSON.stringify(usuario);
    return this.http.post('https://ejemplo-http.firebaseio.com/.json', datos)
      .map((response: Response)=> response.json())
  }*/
}
