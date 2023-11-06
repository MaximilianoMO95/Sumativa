import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HombrosPage } from './hombros.page';

describe('HombrosPage', () => {
  let component: HombrosPage;
  let fixture: ComponentFixture<HombrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HombrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
