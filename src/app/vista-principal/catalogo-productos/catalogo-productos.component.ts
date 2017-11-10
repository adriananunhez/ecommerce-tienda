import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css'],
  providers: [ DataService ]
})
export class CatalogoProductosComponent implements OnInit {
  private productos:any = [];
  constructor(private dataService: DataService,
              public router:Router) {
    this.getProductos();
  }

  ngOnInit() {
  }

  getProductos(){
    this.dataService.getProducts().then((data)=>{
      this.productos = data["products"];
    });
  }

  getProducto(){
    this.dataService.getProducts().then((data)=>{
       this.productos = data["products"];
      console.log(this.productos)
    });
  }


}
