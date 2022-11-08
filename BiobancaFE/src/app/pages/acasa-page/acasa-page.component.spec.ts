import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcasaPageComponent } from './acasa-page.component';

describe('AcasaPageComponent', () => {
  let component: AcasaPageComponent;
  let fixture: ComponentFixture<AcasaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcasaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcasaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
