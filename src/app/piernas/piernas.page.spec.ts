import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiernasPage } from './piernas.page';

describe('PiernasPage', () => {
  let component: PiernasPage;
  let fixture: ComponentFixture<PiernasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PiernasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
