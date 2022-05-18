import { Directive, HostListener, Inject } from '@angular/core';
import { 
  ResponsiveConfig,
  RESPONSIVE_CONFIG
} from '../../config/responsive.config';

/**
 * Abstract class that can be extended by all responsive components. This 
 * pattern is broken in Storybook, so this class had to be refactored into 
 * an injectable dependency (ScreenService). 
 */
@Directive()
export abstract class ResponsiveComponent {
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
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.screenWidth = window.innerWidth;
  }
}
