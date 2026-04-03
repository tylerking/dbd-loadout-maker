export default {
  colors: {
    primary: '#4a90e2',
    secondary: '#f39c12',
    danger: '#e74c3c',
    success: '#2ecc71',
    background: '#1a1a1a',
    surface: '#2c2c2c',
    text: '#f5f5f5',
    textMuted: '#999',
    rarity: {
      common: '#7a7a7a',
      uncommon: '#128312',
      rare: '#1a4e8a',
      veryRare: '#8a1a8a',
      ultraRare: '#8a6e1a'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  fonts: {
    base: 'system-ui, -apple-system, sans-serif'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.2)',
    lg: '0 8px 16px rgba(0,0,0,0.3)'
  }
} as const;
