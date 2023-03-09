import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionPListComponent } from './aplicacion-p-list.component';

describe('AplicacionPListComponent', () => {
  let component: AplicacionPListComponent;
  let fixture: ComponentFixture<AplicacionPListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionPListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacionPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
