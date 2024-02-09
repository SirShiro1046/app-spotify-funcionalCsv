import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasMasCancionesComponent } from './artistas-mas-canciones.component';

describe('ArtistasMasCancionesComponent', () => {
  let component: ArtistasMasCancionesComponent;
  let fixture: ComponentFixture<ArtistasMasCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistasMasCancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistasMasCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
