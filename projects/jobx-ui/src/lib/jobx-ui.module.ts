import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RESPONSIVE_CONFIG,
  RESPONSIVE_CONFIG_DEFAULT
} from './config/responsive.config';
import { ScreenService } from './services/screen.service';
import { 
  GiftsGroupCardComponent
} from './components/gifts-group-card/gifts-group-card.component';
import { 
  GiftsGroupListComponent
} from './components/gifts-group-list/gifts-group-list.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    GiftsGroupCardComponent,
    GiftsGroupListComponent,
    SliderComponent
  ],
  providers: [
    { provide: RESPONSIVE_CONFIG, useValue: RESPONSIVE_CONFIG_DEFAULT },
    ScreenService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GiftsGroupListComponent
  ]
})
export class JobxUiModule { }
