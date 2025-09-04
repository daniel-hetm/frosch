import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteForm } from './favorite-form';

describe('FavoriteForm', () => {
  let component: FavoriteForm;
  let fixture: ComponentFixture<FavoriteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
