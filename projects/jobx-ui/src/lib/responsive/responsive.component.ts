import { Directive, HostListener, Inject } from '@angular/core';
import { 
  ResponsiveConfig,
  RESPONSIVE_CONFIG
} from '../config/responsive.config';

@Directive()
export abstract class ResponsiveComponent {
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
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.screenWidth = window.innerWidth;
  }
}
