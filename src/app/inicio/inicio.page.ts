import { Component, OnInit  } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{
  nombreUsuario: string ='';
  constructor(private navCtrl: NavController){
  }

  images: string[] = [
    'assets/img/Front1.jpg',
    'assets/img/Front3.jpg',
    'assets/img/Front2.jpg',
  ]

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  


  ngOnInit() {

    const usuarioString = localStorage.getItem('usuario');
  if (usuarioString) {
    const usuario = JSON.parse(usuarioString);
    this.nombreUsuario = usuario.nombre;
  }

    

  }




}
