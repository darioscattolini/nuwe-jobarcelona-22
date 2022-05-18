import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsGroupCardComponent } from './gifts-group-card.component';

describe('GiftsGroupCardComponent', () => {
  let component: GiftsGroupCardComponent;
  let fixture: ComponentFixture<GiftsGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsGroupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
