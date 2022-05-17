import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RESPONSIVE_CONFIG,
  RESPONSIVE_CONFIG_DEFAULT
} from './config/responsive.config';
import { ScreenService } from './responsive/screen.service';
import { 
  GiftsGroupCardComponent
} from './gifts-group-card/gifts-group-card.component';
import { 
  GiftsGroupListComponent
} from './gifts-group-list/gifts-group-list.component';
import { SliderComponent } from './slider/slider.component';

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
