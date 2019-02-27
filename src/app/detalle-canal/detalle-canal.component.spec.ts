import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCanalComponent } from './detalle-canal.component';

describe('DetalleCanalComponent', () => {
  let component: DetalleCanalComponent;
  let fixture: ComponentFixture<DetalleCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
