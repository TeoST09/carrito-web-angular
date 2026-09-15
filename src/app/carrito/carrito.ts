import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-carrito',
  styleUrl: './carrito.css',
  templateUrl: './carrito.html',
})
export class Carrito {

  nombreTienda: string = "Mi tienda";
  cantidadProductos: number = 0;
  precioBase: number = 37;
  descuento: number = 20;
  aplicado: boolean = false;
  totalCarrito: number = 0;
  notificacion: string = 'Bienvenido';

  ngOnInit(){
    this.comprobarNotificacion();
  }

  addProducto(){
    this.cantidadProductos += 1;
    this.totalCarrito += this.precioBase;
    this.notificacion = `Tienes: ${this.cantidadProductos} productos`;
    this.comprobarNotificacion();
  }

  add5Productos(){
    this.cantidadProductos += 5;
    this.totalCarrito += (this.precioBase * 5);
    this.notificacion = `Has añadido 5 productos, llevas: ${this.cantidadProductos} productos`;
    this.comprobarNotificacion();
  }

  deleteProducto(){
    if(this.cantidadProductos >= 1){
      this.cantidadProductos -= 1;
      this.totalCarrito -= this.precioBase;
      this.notificacion =  `Haz eliminado un producto. El precio total es de: ${this.totalCarrito}`;
    }
  }

  descuentoProducto(){
    if(this.cantidadProductos >= 1 && this.aplicado == false){
      let descount = this.descuento / 100;
      descount;
      this.totalCarrito = this.totalCarrito * descount;
      this.totalCarrito = Number(this.totalCarrito.toFixed(2));
      this.aplicado = true;
      this.notificacion = 'Se ha aplicado el descuento del 20%'
    }else{
      this.notificacion = 'Erro: Ya has aplicado el descuento';
    }
  }

  vaciarCarrito(){
    this.totalCarrito = 0;
    this.cantidadProductos = 0;
    this.notificacion = 'Se ha vaciado el carrito';
    this.aplicado = false;
  }

  comprobarNotificacion(){
    let limitePrecio = 177;

    if(this.totalCarrito >= limitePrecio){
    this.notificacion = `Has llegado al límite del precio: ${limitePrecio}`;
    }
  }

}