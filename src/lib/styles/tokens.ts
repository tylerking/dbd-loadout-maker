export default {
  colors: {
    primary: '#aa1a18',
    secondary: '#f39c12',
    danger: '#aa1a18',
    success: '#2ecc71',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    textMuted: '#999',
    grayDark: '#292D2E',
    grayDeep: '#121212',
    side: {
      killer: {
        primary: '#aa1a18',
        secondary: '#991412',
        dark: '#7C0B0A'
      },
      survivor: {
        primary: '#2e63a1',
        secondary: '#24558e',
        dark: '#1D3F66'
      }
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
    heading: "Roboto Condensed, sans-serif",
    body: "Roboto, sans-serif"
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.2)',
    lg: '0 8px 16px rgba(0,0,0,0.3)'
  }
} as const;
