/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none'
            }
          }
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
