/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-secondary-100',

  ],
  mode: 'jit',
  theme: {
    boxShadow: {
      'primary-xs': '0px 0px 0px 4px rgba(1, 179, 248, 0.2)',
      'primary-sm': '0px 0px 0px 4px rgba(172, 230, 253, 0.4)',
      'secondary-xs': '0px 0px 0px 4px rgba(52, 64, 85, 0.2)',
      'success-xs': ' 0px 0px 0px 4px rgba(0, 202, 105, 0.2)',
      'danger-xs': '0px 0px 0px 4px rgba(255, 81, 81, 0.25)',
      'warning-xs': '0px 0px 0px 4px rgba(234, 196, 53, 0.2)',
      normal: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-section': 'linear-gradient(90deg, rgba(245, 246, 248, 1) 50%, rgba(1, 179, 248, 0.1) 50%)',
        'about-background':
          'linear-gradient(to bottom, rgba(245, 246, 248,1) 35%,rgba(30,87,153,1) 35%,rgba(30,87,153,1) 35%,rgba(255,255,255,1) 35%);',
      },
      colors: {
        black: {
          100: '#252631',
          200: '#1B1E24',
          300: '#1E1E1E',
          400: '#140706',
          500: '#262626',
          600: '#000000',
          700: '#778CA2',
          900: '#000000'
        },
        red: { 100: '#FEF2F2', 200: '#EF4444', 300: '#D71E0E' },
        "custom-green": '#52965E',
        white: '#FFFFFF',
        tertiary: '#0C1A2C',
        lightgray: '#F5F6F8',
        light: '#E6E8EA',
      }
    }
  },
  plugins: []
};

