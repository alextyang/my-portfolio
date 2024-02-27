import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      fontFamily: {
        'nhgt': ['neue-haas-grotesk-text', 'sans-serif'],
        'nhgd': ['neue-haas-grotesk-display', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;