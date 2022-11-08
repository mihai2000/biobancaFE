import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularPageComponent } from './formular-page.component';

describe('FormularPageComponent', () => {
  let component: FormularPageComponent;
  let fixture: ComponentFixture<FormularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
