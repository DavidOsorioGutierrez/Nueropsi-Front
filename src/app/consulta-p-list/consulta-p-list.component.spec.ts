import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPListComponent } from './consulta-p-list.component';

describe('ConsultaPListComponent', () => {
  let component: ConsultaPListComponent;
  let fixture: ComponentFixture<ConsultaPListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
