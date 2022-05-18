import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveComponent } from './responsive.component';
import {
  RESPONSIVE_CONFIG,
  RESPONSIVE_CONFIG_DEFAULT
} from '../../config/responsive.config';

class ResponsiveComponentConcrete extends ResponsiveComponent {}

describe('ResponsiveComponent', () => {
  let component: ResponsiveComponent;
  let fixture: ComponentFixture<ResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveComponent ],
      providers: [
        { provide: RESPONSIVE_CONFIG, useValue: RESPONSIVE_CONFIG_DEFAULT }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveComponentConcrete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
