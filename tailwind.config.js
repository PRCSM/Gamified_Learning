/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FC5107',
        'accent-hover': '#E04A06',
        'bg-primary': '#F4F4F4',
        'bg-secondary': '#F3F4F6',
        'bg-tertiary': '#E5E7EB',
        'bg-hover': '#D1D5DB',
        'text-primary': '#201D1D',
        'text-secondary': '#4B5563',
        'text-muted': '#6B7280',
        'border-primary': '#E5E7EB',
        'border-secondary': '#D1D5DB',
        'border-hover': '#9CA3AF',
      },
      fontFamily: {
        haffer: ['Haffer', 'system-ui', 'sans-serif'],
        'haffer-mono': ['Haffer Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '7px',
        sm: '5px',
        md: '7px',
        lg: '7px',
        xl: '7px',
        '2xl': '7px',
        card: '7px',
      },
      spacing: {
        sidebar: '240px',
      },
      maxWidth: {
        container: '1200px',
      },
      width: {
        sidebar: '240px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        micro: '120ms',
        standard: '240ms',
        large: '480ms',
      },
    },
  },
  plugins: [],
};
