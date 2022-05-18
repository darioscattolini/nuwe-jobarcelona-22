import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsGroupListComponent } from './gifts-group-list.component';

describe('GiftsGroupListComponent', () => {
  let component: GiftsGroupListComponent;
  let fixture: ComponentFixture<GiftsGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
