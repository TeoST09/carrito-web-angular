# Carrito Web Sencillo

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)


Aplicación web sencilla desarrollada con Angular y Tailwind CSS como práctica de conceptos básicos del framework.

## Descripción

Este proyecto simula un carrito de compra básico en el que es posible:

- Cambiar el nombre de la tienda.
- Añadir productos al carrito.
- Añadir cinco productos de una sola vez.
- Eliminar productos.
- Aplicar un descuento del 20%.
- Vaciar el carrito.
- Mostrar notificaciones según las acciones realizadas.
- Controlar un límite máximo de precio.

## Vista previa

![Vista previa](preview.png)

## Tecnologías utilizadas

## 🛠️ Tecnologías utilizadas

| Tecnología   | Versión |
| ------------ | ------- |
| Angular      | 22      |
| TypeScript   | 6.x     |
| Tailwind CSS | 4.x     |
| HTML5        | —       |
| CSS3         | —       |

## Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

* **Node.js**
* **npm**
* **Angular CLI**

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
ng version
```

## Conceptos practicados

### Interpolación

```html
{{ totalCarrito }}
```

### Event Binding

```html
(click)="addProducto()"
```

### Two-Way Data Binding

```html
<input [(ngModel)]="nombreTienda">
```

### Renderizado condicional

```html
@if(notificacion){
  ...
}
```

### Componentes y métodos

```ts
addProducto()
deleteProducto()
vaciarCarrito()
```

## Instalación

```bash
git clone https://github.com/TU-USUARIO/carrito-angular.git
cd carrito-angular
npm install
ng serve
```

Abrir en:

```text
http://localhost:4200
```

## Autor

Mateo López

