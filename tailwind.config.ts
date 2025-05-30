import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',   // Next 13 App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Pages Router (если используется)
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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