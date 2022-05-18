import { Inject, Injectable } from '@angular/core';
import { 
  ResponsiveConfig, RESPONSIVE_CONFIG 
} from '../config/responsive.config';

/**
 * Service that tracks viewport width for responsive components. Designed
 * originally as an abstract component, but that pattern is broken in Storybook.
 */
@Injectable({ providedIn: 'root' })
export class ScreenService {
  public get isSmall() {
    return this.screenWidth < this.medium;
  }
  
  public get isMedium() {
    return this.screenWidth >= this.medium && this.screenWidth < this.large;
  }

  public get isLarge() {
    return this.screenWidth >= this.large && this.screenWidth < this.xLarge;
  }

  public get isXLarge() {
    return this.screenWidth >= this.xLarge;
  };
  
  private medium: number;
  private large: number;
  private xLarge: number;
  private screenWidth: number;
  
  constructor(
    @Inject(RESPONSIVE_CONFIG) config: ResponsiveConfig
  ) {
    this.screenWidth = window.innerWidth;
    this.medium = config.medium;
    this.large = config.large;
    this.xLarge = config.xLarge;
    window.onresize = () => { this.screenWidth = window.innerWidth };
  }
}
