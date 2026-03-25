export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#10b981',
          dark: '#059669',
          glow: 'rgba(16,185,129,0.35)'
        },
        'tech-blue': '#3b82f6',
        'bg-deep': '#0a0f0a',
        'text-primary': '#f0fdf4',
        'text-secondary': '#a7c4b5'
      }
    }
  },
  plugins: []
}
