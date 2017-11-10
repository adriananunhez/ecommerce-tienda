import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from  './http.service';
import { LogService } from './log.service';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { BarraNavegacionComponent } from './vista-principal/barra-navegacion/barra-navegacion.component';
import { CatalogoProductosComponent } from './vista-principal/catalogo-productos/catalogo-productos.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductoComponent } from './vista-principal/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaPrincipalComponent,
    BarraNavegacionComponent,
    CatalogoProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
