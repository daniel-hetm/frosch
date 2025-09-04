import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogPictures } from './frog-pictures';

describe('FrogPictures', () => {
  let component: FrogPictures;
  let fixture: ComponentFixture<FrogPictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrogPictures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogPictures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
