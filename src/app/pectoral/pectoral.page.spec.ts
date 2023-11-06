import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PectoralPage } from './pectoral.page';

describe('PectoralPage', () => {
  let component: PectoralPage;
  let fixture: ComponentFixture<PectoralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PectoralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
