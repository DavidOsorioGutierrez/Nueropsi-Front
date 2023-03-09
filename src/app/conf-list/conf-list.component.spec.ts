import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfListComponent } from './conf-list.component';

describe('ConfListComponent', () => {
  let component: ConfListComponent;
  let fixture: ComponentFixture<ConfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
