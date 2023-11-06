import { Component, OnInit } from '@angular/core';
import { MiServicioRutina } from '../mi-servicio-rutina.service'; 

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  ejerciciosEnRutina: string[]; 

  constructor(private miServicioRutina: MiServicioRutina) {
    // Obtener la lista de ejercicios de la rutina desde el servicio
    this.ejerciciosEnRutina = this.miServicioRutina.obtenerRutina();
  }

 

  ngOnInit() {
  }

}
