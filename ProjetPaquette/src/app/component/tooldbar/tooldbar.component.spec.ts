import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooldbarComponent } from './tooldbar.component';

describe('TooldbarComponent', () => {
  let component: TooldbarComponent;
  let fixture: ComponentFixture<TooldbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooldbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooldbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
