import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Espalda',
      url: '/menu/espalda',
      icono: 'book'
    },
    {
      titulo: 'Pectoral',
      url: '/menu/pectoral',
      icono: 'book'
    },
    {
      titulo: 'Piernas',
      url: '/menu/piernas',
      icono: 'book'
    },
    {
      titulo: 'Hombros',
      url: '/menu/hombros',
      icono: 'book'
    },
    {
      titulo: 'Brazos',
      url: '/menu/brazos',
      icono: 'book'
    },
    {
      titulo: 'Mi Rutina',
      url: '/menu/rutina',
      icono: 'book'
    }
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }
    nombreUsuario: string ='';
  ngOnInit() {

    const usuarioString = localStorage.getItem('usuario');
  if (usuarioString) {
    const usuario = JSON.parse(usuarioString);
    this.nombreUsuario = usuario.nombre;
  }


  }

  cambiarIndiceSeleccionado(i:number){
    this.indiceSeleccionado = i;
  }

  

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Quieres cerrar sesion?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

  

}