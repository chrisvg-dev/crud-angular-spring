import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = null as any;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {  }

  ngOnInit(): void {    
    // capturar párametros de la url
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        console.log(err);
        this.toastr.error('ERROR: ' + err.error, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.update(id, this.producto).subscribe(
      data => {
        console.log(data);
        this.toastr.success(data.mensaje, 'Ok', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.toastr.error('No se pudo ACTUALIZAR el producto: ' + err.error, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }

}
