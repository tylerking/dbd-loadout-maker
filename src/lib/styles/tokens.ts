export default {
  colors: {
    primary: '#c8102e',
    secondary: '#f39c12',
    danger: '#e74c3c',
    success: '#2ecc71',
    background: '#1a1a1a',
    surface: '#2c2c2c',
    text: '#f5f5f5',
    textMuted: '#999',
    side: {
      killer: '#c8102e',
      survivor: '#2f9cd6',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  fonts: {
    heading: "'Roboto Condensed', sans-serif",
    body: "'Roboto', sans-serif"
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.2)',
    lg: '0 8px 16px rgba(0,0,0,0.3)'
  }
} as const;
