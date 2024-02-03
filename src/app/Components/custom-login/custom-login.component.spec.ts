import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoginComponent } from './custom-login.component';

describe('CustomLoginComponent', () => {
  let component: CustomLoginComponent;
  let fixture: ComponentFixture<CustomLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomLoginComponent]
    });
    fixture = TestBed.createComponent(CustomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
