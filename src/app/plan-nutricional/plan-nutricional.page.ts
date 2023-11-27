import { Component, OnInit } from '@angular/core';
import { ThemealdbService } from '../themealdb.service';

@Component({
  selector: 'app-plan-nutricional',
  templateUrl: './plan-nutricional.page.html',
  styleUrls: ['./plan-nutricional.page.scss'],
})
export class PlanNutricionalPage implements OnInit {
  categoriasDeComida: any[] = [];
  mostrarCategorias: boolean = false;

  constructor(private themealdbService: ThemealdbService) {}

  ngOnInit() {}

  obtenerPlanNutricional() {
    this.themealdbService.getCategories().subscribe(
      (data) => {
        this.categoriasDeComida = data.categories;
        this.mostrarCategorias = true; 
      },
      (error) => {
        console.error(error);
      }
    );
  }
}