import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMomentoComponent } from './novo-momento.component';

describe('NovoMomentoComponent', () => {
  let component: NovoMomentoComponent;
  let fixture: ComponentFixture<NovoMomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoMomentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoMomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
