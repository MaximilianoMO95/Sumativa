import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspaldaPage } from './espalda.page';

describe('EspaldaPage', () => {
  let component: EspaldaPage;
  let fixture: ComponentFixture<EspaldaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspaldaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
