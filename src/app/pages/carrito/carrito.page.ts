import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  
  menu = [
    {
      id_producto: '1',
      id_negocio: '1',
      imagen: '../../assets/img/zapataburguer.jpg',
      nombreproducto: 'Hamburguesa Zapata',
      precio: '108.00',
      nombrenegocio: 'Zapata Parrilla Méxicana',
      enviofast: true
    },
    {
      id_producto: '9',
      id_negocio: '1',
      imagen: '../../assets/img/tomhawak.jpg',
      nombreproducto: 'Tomhawak 3/4 1kg',
      precio: '350.00',
      nombrenegocio: 'Zapata Parrilla Méxicana',
      enviofast: true
    },
    {
      id_producto: '8',
      id_negocio: '1',
      imagen: '../../assets/img/coca.jpg',
      nombreproducto: 'Coca-Cola Original 235ml',
      precio: '14.00',
      nombrenegocio: 'Zapata Parrilla Méxicana',
      enviofast: true
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(['/folder/Inbox']);
  }


}
