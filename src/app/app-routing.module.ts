import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { ProductoComponent } from './vista-principal/producto/producto.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'vista-principal', component: VistaPrincipalComponent},
   { path: 'producto/:id', component: ProductoComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
