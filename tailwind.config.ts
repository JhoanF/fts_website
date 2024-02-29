import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        ftsBlue: {
          50: '#f2f7ff',
          100: '#e6efff',
          200: '#c0daff',
          300: '#99c5ff',
          400: '#3366ff',
          500: '#1f4db3',
          600: '#305ce6',
          700: '#1f3b99',
          800: '#172d73',
          900: '#0f204d',
        }
      }
    },
  },
  plugins: [],
};
export default config;
