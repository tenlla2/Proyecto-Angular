import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVideoComponent } from './detalle-video.component';

describe('DetalleVideoComponent', () => {
  let component: DetalleVideoComponent;
  let fixture: ComponentFixture<DetalleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
