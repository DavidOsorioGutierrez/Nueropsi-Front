import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoAListComponent } from './resultado-a-list.component';

describe('ResultadoAListComponent', () => {
  let component: ResultadoAListComponent;
  let fixture: ComponentFixture<ResultadoAListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoAListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
