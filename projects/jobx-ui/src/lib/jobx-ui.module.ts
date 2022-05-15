import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RESPONSIVE_CONFIG,
  RESPONSIVE_CONFIG_DEFAULT
} from './config/responsive.config';
import { 
  GiftsGroupListComponent
} from './gifts-group-list/gifts-group-list.component';

@NgModule({
  declarations: [
    GiftsGroupListComponent
  ],
  providers: [
    { provide: RESPONSIVE_CONFIG, useValue: RESPONSIVE_CONFIG_DEFAULT }
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GiftsGroupListComponent
  ]
})
export class JobxUiModule { }