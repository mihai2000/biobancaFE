import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetariPageComponent } from './setari-page.component';

describe('SetariPageComponent', () => {
  let component: SetariPageComponent;
  let fixture: ComponentFixture<SetariPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetariPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetariPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
