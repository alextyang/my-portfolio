import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '440px',
      sm: '620px',
      md: '820px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#f4f4f4',
      'grey': '#6f7071',
      'black': '#030405',
    },
    extend: {
      fontSize: {
        xl: ['1.27rem', '1.78rem'],
      },
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