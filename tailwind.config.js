/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'IBM Plex Mono', 'monospace'],
      },
      colors: {
        border: 'rgba(255, 255, 255, 0.08)',
        accent: 'rgba(94, 210, 156, 1)',
        muted: '#AAAAAA',
        dim: '#666666',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
}