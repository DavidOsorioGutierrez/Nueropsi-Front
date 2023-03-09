import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTListComponent } from './control-t-list.component';

describe('ControlTListComponent', () => {
  let component: ControlTListComponent;
  let fixture: ComponentFixture<ControlTListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlTListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
