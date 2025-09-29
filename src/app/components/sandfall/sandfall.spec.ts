import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandfall } from './sandfall';

describe('Sandfall', () => {
  let component: Sandfall;
  let fixture: ComponentFixture<Sandfall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sandfall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sandfall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
