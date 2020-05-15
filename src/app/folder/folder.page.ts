import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  recomendado = [
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
      id_producto: '2',
      id_negocio: '2',
      imagen: '../../assets/img/MICHELOB.jpg',
      nombreproducto: 'Six Michelob Ultra 256 ml',
      precio: '105.00',
      nombrenegocio: 'Licores REYVA',
      enviofast: false
    },
    {
      id_producto: '3',
      id_negocio: '3',
      imagen: '../../assets/img/taco.jpg',
      nombreproducto: 'Taco al pastor',
      precio: '10.50',
      nombrenegocio: 'Taqueria Arandas suc. La Purisima',
      enviofast: true
    },
    {
      id_producto: '4',
      id_negocio: '2',
      imagen: '../../assets/img/smirnoff.jpg',
      nombreproducto: 'Vodka Smirnoff Tamarindo',
      precio: '209.00',
      nombrenegocio: 'Licores REYVA',
      enviofast: true
    },
  ];

  lomasvendido = [
    {
      id_producto: '3',
      id_negocio: '3',
      imagen: '../../assets/img/taco.jpg',
      nombreproducto: 'Taco al pastor',
      precio: '10.50',
      nombrenegocio: 'Taqueria Arandas suc. La Purisima',
      enviofast: true
    },
    {
      id_producto: '4',
      id_negocio: '2',
      imagen: '../../assets/img/smirnoff.jpg',
      nombreproducto: 'Vodka Smirnoff Tamarindo',
      precio: '209.00',
      nombrenegocio: 'Licores REYVA',
      enviofast: true
    },
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  buscar() {
    this.router.navigate(['/menu']);
  }

  iracarrito() {
    this.router.navigate(['/carrito']);
  }

  abrirNegocio(idnegocio: any, idproducto: any) {
    // console.log('id del negocio', idnegocio);
    // console.log('id del producto', idproducto);
    this.router.navigate(['/perfilnegocio/' + idnegocio]);
  }

}
