
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: '#6366F1',
        secondary: '#F97316',
        analogous1: '#8B5CF6',
        analogous2: '#06B6D4',
        triadic: '#7C3AED',
        dark: '#10B981',
        textPrimary: '#374151',
        textLight: '#6B7280',
        textSubtle: '#9CA3AF',
        accentBlue: '#3B82F6',
        accentYellow: '#FEF3C7',
        error: '#EF4444',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  }
}