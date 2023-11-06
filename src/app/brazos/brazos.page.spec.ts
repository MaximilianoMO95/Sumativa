import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrazosPage } from './brazos.page';

describe('BrazosPage', () => {
  let component: BrazosPage;
  let fixture: ComponentFixture<BrazosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrazosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
