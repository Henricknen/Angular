import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoFormComponent } from './momento-form.component';

describe('MomentoFormComponent', () => {
  let component: MomentoFormComponent;
  let fixture: ComponentFixture<MomentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
