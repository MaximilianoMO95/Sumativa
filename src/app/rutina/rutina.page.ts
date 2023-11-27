import { Component, OnInit } from '@angular/core';
import { MiServicioRutina } from '../mi-servicio-rutina.service';
import { JsonplaceholderService } from '../jsonplaceholder.service';  
import { ThemealdbService } from '../themealdb.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {
  ejerciciosEnRutina: string[] = [];

  constructor(
    private miServicioRutina: MiServicioRutina,
    private jsonPlaceholderService: JsonplaceholderService,
    private themealdbService: ThemealdbService
  ) {
    this.ejerciciosEnRutina = this.miServicioRutina.obtenerRutina();
  }

  ngOnInit() {}

  obtenerMasInformacion() {
    
    this.jsonPlaceholderService.getPosts().subscribe((data) => {
      
      this.ejerciciosEnRutina = data.map((post) => post.title);
    });
  }

}
