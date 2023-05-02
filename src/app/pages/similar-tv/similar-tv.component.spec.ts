import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarTvComponent } from './similar-tv.component';

describe('SimilarTvComponent', () => {
  let component: SimilarTvComponent;
  let fixture: ComponentFixture<SimilarTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
