import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      fontFamily: {
        'tropiline-square': ['Tropiline-Square', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2.5rem))' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      colors: {
        /** Фирменная палитра */
        brand: {
          /** Тёмный Navy-фон — #001F3F */
          navy: '#001F3F',
          /** Яркий акцент/CTA — #FE5B2C */
          orange: '#FE5B2C',
        },
      },
    },
  },
  plugins: [
    lineClamp,
  ],
};

export default config;