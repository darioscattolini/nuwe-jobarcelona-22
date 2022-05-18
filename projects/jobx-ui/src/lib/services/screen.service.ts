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
  public get isMobile() {
    return this.screenWidth < this.tabletMin;
  }
  
  public get isTablet() {
    return this.screenWidth >= this.tabletMin
      && this.screenWidth < this.pcSmallMin;
  }

  public get isPcSmall() {
    return this.screenWidth >= this.pcSmallMin
      && this.screenWidth < this.wideScreenMin;
  }

  public get isWideScreen() {
    return this.screenWidth >= this.wideScreenMin;
  };
  
  private tabletMin: number;
  private pcSmallMin: number;
  private wideScreenMin: number;
  private screenWidth: number;
  
  constructor(
    @Inject(RESPONSIVE_CONFIG) config: ResponsiveConfig
  ) {
    this.screenWidth = window.innerWidth;
    this.tabletMin = config.tabletMin;
    this.pcSmallMin = config.pcMin;
    this.wideScreenMin = config.wideScreenMin;
    window.onresize = () => { this.screenWidth = window.innerWidth };
  }
}
