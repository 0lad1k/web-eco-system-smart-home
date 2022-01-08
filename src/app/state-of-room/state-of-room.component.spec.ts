import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOfRoomComponent } from './state-of-room.component';

describe('StateOfRoomComponent', () => {
  let component: StateOfRoomComponent;
  let fixture: ComponentFixture<StateOfRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateOfRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOfRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
