import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {



  slides = [
    {
      img: '../../../assets/img/tequila-don-julio-70-700-ml.jpg',
      titulo: 'Pide lo que quieras desde la comodidad de tu hogar, Fastery te lo lleva'
    },
    {
      img: '../../../assets/img/tequila-don-julio-70-700-ml.jpg',
      titulo: 'Pide lo que quieras desde la comodidad de tu hogar, Fastery te lo lleva'
    },
    {
      img: '../../../assets/img/tequila-don-julio-70-700-ml.jpg',
      titulo: 'Pide lo que quieras desde la comodidad de tu hogar, Fastery te lo lleva'
    }
  ];

  constructor(private router: Router) {
  
  }

  ngOnInit() {
  }



  comenzar() {
    this.router.navigate(['/lobby']);
  }

}
