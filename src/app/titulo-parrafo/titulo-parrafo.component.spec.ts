import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloParrafoComponent } from './titulo-parrafo.component';

describe('TituloParrafoComponent', () => {
  let component: TituloParrafoComponent;
  let fixture: ComponentFixture<TituloParrafoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloParrafoComponent]
    });
    fixture = TestBed.createComponent(TituloParrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
