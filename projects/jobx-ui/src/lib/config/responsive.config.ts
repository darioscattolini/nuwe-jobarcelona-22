import { InjectionToken } from '@angular/core';

export interface ResponsiveConfig {
  tabletMin: number;
  pcMin: number;
  wideScreenMin: number;
}

export const RESPONSIVE_CONFIG 
  = new InjectionToken<ResponsiveConfig>('responsive.config');

export const RESPONSIVE_CONFIG_DEFAULT: ResponsiveConfig = {
  tabletMin: 768,
  pcMin: 992,
  wideScreenMin: 1200
}
