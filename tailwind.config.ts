import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        bgBase: 'var(--color-bgBase)',
        bgSecondary: 'var(--color-bgSecondary)',
        primary: 'var(--color-primary)',
        active: 'var(--color-active)',
        h1: 'var(--color-h1)',
        h2: 'var(--color-h2)',
        h3: 'var(--color-h3)',
        link: 'var(--color-link)',
      }
    },
  },
  plugins: [],
} satisfies Config;
