import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvImagesComponent } from './tv-images.component';

describe('TvImagesComponent', () => {
  let component: TvImagesComponent;
  let fixture: ComponentFixture<TvImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
