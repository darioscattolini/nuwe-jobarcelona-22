import { InjectionToken } from '@angular/core';

export interface ResponsiveConfig {
  medium: number;
  large: number;
  xLarge: number;
}

export const RESPONSIVE_CONFIG 
  = new InjectionToken<ResponsiveConfig>('responsive.config');

export const RESPONSIVE_CONFIG_DEFAULT: ResponsiveConfig = {
  medium: 768,
  large: 992,
  xLarge: 1280
}
