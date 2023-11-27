import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanNutricionalPage } from './plan-nutricional.page';

describe('PlanNutricionalPage', () => {
  let component: PlanNutricionalPage;
  let fixture: ComponentFixture<PlanNutricionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanNutricionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
