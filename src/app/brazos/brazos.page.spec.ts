import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BrazosPage } from './brazos.page';
import { MiServicioRutina } from '../mi-servicio-rutina.service';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

describe('BrazosPage', () => {
  let component: BrazosPage;
  let fixture: ComponentFixture<BrazosPage>;
  let miServicioRutina: MiServicioRutina;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrazosPage],
      imports: [IonicModule.forRoot(), HttpClientModule],  // Agrega HttpClientModule en imports
      providers: [MiServicioRutina],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazosPage);
    component = fixture.componentInstance;
    miServicioRutina = TestBed.inject(MiServicioRutina); // Obtener la instancia del servicio
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add exercise to routine when "Añadir a mi rutina" button is clicked', fakeAsync(() => {
    const exerciseName = 'Ejercicio de prueba';
    
    spyOn(miServicioRutina, 'agregarEjercicio'); // Espiar el método agregarEjercicio del servicio

    // Esperar a que Angular aplique los cambios
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const addButton = fixture.nativeElement.querySelector('ion-list ion-item ion-button');

      // Verificar si el botón existe antes de intentar hacer clic
      if (addButton) {
        // Simular un clic en el botón
        addButton.click();

        // Esperar a que se resuelva la promesa de cambio de Angular
        tick();
        
        // Verificar que el método agregarEjercicio fue llamado con el nombre del ejercicio
        expect(miServicioRutina.agregarEjercicio).toHaveBeenCalledWith(exerciseName);
      } else {
        // Si el botón no existe, la prueba falla
        fail('No se encontró el botón "Añadir a mi rutina"');
      }
    });
  }));
});
