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
  limitePrecio:number = 177;
  descuento: number = 20;
  aplicado: boolean = false;
  totalCarrito: number = 0;
  notificacion: string = 'Bienvenido';

  ngOnInit(){
    this.comprobarLimite();
  }

  addProducto(){
    if(this.comprobarLimite() != true){
      this.cantidadProductos += 1;
      this.totalCarrito += this.precioBase;
      this.notificacion = `Tienes: ${this.cantidadProductos} productos`;
    }
  }

  add5Productos(){
    let agregados = 0;
    
    if(this.comprobarLimite()){
      return;
    }

    for (let i = 0; i < 5; i++) {

      if (this.comprobarLimite()) {
        this.notificacion = `Se agregaron solamente ${agregados} productos. Límite: $${this.limitePrecio}`;
        return;
      }

      this.cantidadProductos++;
      this.totalCarrito += this.precioBase;

      agregados++;
    }

    this.notificacion = `Has añadido ${agregados} productos, llevas: ${this.cantidadProductos} productos`;
  }

  deleteProducto(){
    if(this.cantidadProductos >= 1){
      this.cantidadProductos -= 1;
      this.totalCarrito -= this.precioBase;
      this.notificacion =  `Haz eliminado un producto. El precio total es de: ${this.totalCarrito}`;
      this.comprobarLimite();
    }
  }

  descuentoProducto(){
    if(this.cantidadProductos >= 1 && this.aplicado == false){
      let descount = this.descuento / 100;
      this.totalCarrito = this.totalCarrito * descount;
      this.totalCarrito = Number(this.totalCarrito.toFixed(2));
      this.aplicado = true;
      this.notificacion = 'Se ha aplicado el descuento del 20%'
    }else if (this.cantidadProductos >= 1 && this.aplicado == true) {
      this.notificacion = 'Error: Ya has aplicado el descuento';
    }else{
      this.notificacion = 'Error: No tienes ningun producto en el carrito';
    }
  }

  vaciarCarrito(){
    this.totalCarrito = 0;
    this.cantidadProductos = 0;
    this.notificacion = 'Se ha vaciado el carrito';
    this.aplicado = false;
  }

  comprobarLimite(){
    if(this.totalCarrito + this.precioBase > this.limitePrecio){
      this.notificacion = `No puedes agregar más productos. El limite es: $${this.limitePrecio}`;
      return true;
    }

    return false;
  }

}