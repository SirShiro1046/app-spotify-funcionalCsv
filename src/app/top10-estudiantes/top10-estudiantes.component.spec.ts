import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10EstudiantesComponent } from './top10-estudiantes.component';

describe('Top10EstudiantesComponent', () => {
  let component: Top10EstudiantesComponent;
  let fixture: ComponentFixture<Top10EstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Top10EstudiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top10EstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
