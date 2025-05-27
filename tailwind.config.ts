// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',   // Next 13 App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // (если используете Pages Router)
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        /** Фирменная палитра */
        brand: {
          /** Тёмный Navy-фон — #001F3F */
          navy:   '#001F3F',
          /** Яркий акцент/CTA — #FE5B2C */
          orange: '#FE5B2C',
        },
      },
    },
  },
  plugins: [],
};

export default config;
