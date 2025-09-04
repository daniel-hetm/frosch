import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frog } from './frog';

describe('Frog', () => {
  let component: Frog;
  let fixture: ComponentFixture<Frog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
