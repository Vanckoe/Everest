import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',   // Next 13 App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Pages Router (если используется)
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Next 13 App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // (если используете Pages Router)
    './components/**/*.{js,ts,jsx,tsx}',
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