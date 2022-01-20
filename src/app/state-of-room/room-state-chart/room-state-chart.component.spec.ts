import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStateChartComponent } from './room-state-chart.component';

describe('RoomStateChartComponent', () => {
  let component: RoomStateChartComponent;
  let fixture: ComponentFixture<RoomStateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomStateChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
