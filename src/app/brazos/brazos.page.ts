import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MiServicioRutina } from '../mi-servicio-rutina.service'; 

@Component({
  selector: 'app-brazos',
  templateUrl: './brazos.page.html',
  styleUrls: ['./brazos.page.scss'],
})
export class BrazosPage  {

  ejercicios: any[] = []; 

  constructor(private http: HttpClient, private router: Router, private MiServicioRutina: MiServicioRutina) {
     
    
    this.loadEjercicios();
  }

  loadEjercicios() {
   
    this.http.get('assets/ejercicios-brazos.json').subscribe(data => {
      this.ejercicios = data as any[];
    });
  }

  agregarARutina(nombreEjercicio: string) {
    
    this.MiServicioRutina.agregarEjercicio(nombreEjercicio);
    console.log('Añadir a mi rutina:', nombreEjercicio);
    
    this.router.navigate(['menu/rutina']);
  }


}

  


