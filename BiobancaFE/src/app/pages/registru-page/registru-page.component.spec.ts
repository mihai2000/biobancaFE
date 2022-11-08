import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistruPageComponent } from './registru-page.component';

describe('RegistruPageComponent', () => {
  let component: RegistruPageComponent;
  let fixture: ComponentFixture<RegistruPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistruPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistruPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
