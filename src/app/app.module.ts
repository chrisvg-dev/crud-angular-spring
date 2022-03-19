import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Manejo de ajax y formularios
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; 

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { ELIMINARProductoComponent } from './producto/eliminar-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
    ELIMINARProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
