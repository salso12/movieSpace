import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorTvComponent } from './actor-tv.component';

describe('ActorTvComponent', () => {
  let component: ActorTvComponent;
  let fixture: ComponentFixture<ActorTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
