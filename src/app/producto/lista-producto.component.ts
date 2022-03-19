import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        console.log(data);
        this.toastr.success(data.mensaje, 'Ok', {
          timeOut: 3000,
        });
        this.cargarProductos();
      },
      err => {
        console.log(err);
        this.toastr.error("ERROR: " + err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
      }
    );
  }

}
