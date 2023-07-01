/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'nunito': ['"Nunito", sans-serif'],
      'cursive-alex': ['"Alex Brush", cursive'],
      'cursive-kaushan': ['"Kaushan Script", cursive'],
      'head-ebgaramond': ['"EB Garamond", serif'],
      'para-worksans': ['"Work Sans", sans-serif'],
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
        DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
        md: '0 5px 13px rgb(60 72 88 / 0.20)',
        lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
        xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
        testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
      },

      spacing: {
        0.75: '0.1875rem',
        3.25: '0.8125rem'
      },

      maxWidth: ({
        theme,
        breakpoints
      }) => ({
        '1200': '71.25rem',
        '992': '60rem',
        '768': '45rem',
      }),

      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        999: '999',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('precss'),
    require('autoprefixer')
  ],
}
