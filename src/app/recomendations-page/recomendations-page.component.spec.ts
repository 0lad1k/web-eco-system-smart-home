import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationsPageComponent } from './recomendations-page.component';

describe('RecomendationsPageComponent', () => {
  let component: RecomendationsPageComponent;
  let fixture: ComponentFixture<RecomendationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
