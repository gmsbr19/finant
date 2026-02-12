import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    background: '#121214',
    text: '#E1E1E6',
    textSecondary: '#A8A8B3',
    
    survival: '#00B37E',
    eudaimonia: '#FBA94C',
    resilience: '#8257e5',
    
    danger: '#E25858',
    cardBg: '#202024',
  },
  space: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  }
});