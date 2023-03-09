import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCListComponent } from './control-c-list.component';

describe('ControlCListComponent', () => {
  let component: ControlCListComponent;
  let fixture: ComponentFixture<ControlCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
