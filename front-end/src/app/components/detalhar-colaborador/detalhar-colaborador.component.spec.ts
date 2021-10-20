import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharColaboradorComponent } from './detalhar-colaborador.component';

describe('DetalharColaboradorComponent', () => {
  let component: DetalharColaboradorComponent;
  let fixture: ComponentFixture<DetalharColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
