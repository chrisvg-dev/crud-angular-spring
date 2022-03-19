import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre: string = '';
  precio: number = 0;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.save(producto).subscribe(
      data => {
        console.log(data);
        this.toastr.success(data.mensaje, 'Ok', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.toastr.error('No se pudo crear el producto: ' + err.error, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }

}
