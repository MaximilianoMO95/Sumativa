import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl: NavController) { 

    this.formLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {

    
  }

  async ingresar(){
    var f = this.formLogin.value;

    
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      var usuario = JSON.parse(usuarioString);

      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navControl.navigateRoot('menu/inicio')
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
    
        await alert.present();
      }
    } else {
     
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se encontraron datos de usuario en el almacenamiento local.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}
