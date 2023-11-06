import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioRutina {
  rutina: string[] = [];

  agregarEjercicio(nombreEjercicio: string) {
    this.rutina.push(nombreEjercicio);
  }

  obtenerRutina() {
    return this.rutina;
  }
  constructor() { }
}
