import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaSinVocesComponent } from './musica-sin-voces.component';

describe('MusicaSinVocesComponent', () => {
  let component: MusicaSinVocesComponent;
  let fixture: ComponentFixture<MusicaSinVocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicaSinVocesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicaSinVocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
