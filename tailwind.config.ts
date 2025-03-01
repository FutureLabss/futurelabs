import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'size-10': '.625rem', //? 10px
        'size-12': '.75rem', //? 12px
        'size-14': '.875rem', //? 14px
        'size-16': '1rem', //? 16px
        'size-18': '1.125rem', //? 18px
        'size-20': '1.25rem', //? 20px
        'size-24': '1.5rem', //? 24px
        'size-28': '1.75rem', //? 28px  
        'size-32': '2rem', //? 32px
        'size-36': '2.25rem', //? 36px
        'size-40': '2.5rem', //? 40px
        'size-48': '3rem', //? 48px
        'size-56': '3.5rem', //? 56px
        'size-61': '3.8125rem', //? 61px
      },
      colors: {
        background: '#FFF6F1',
        primary: {
          default: '#000000',
          dark: '#24304E',
          light_dark: "#62636C",
          light: '#1E1F24',
          lighter: "#B9BBC6",
        },
        secondary: {
          default: '#F47C1D',
          50: "#F57F20",
        },
        tertiary: {
          default: '#093851',
          700: "#105F89",
        },
      },
      screens: {
        xsm: "320px",
        xxs: "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1536px",
        // "3xl": "60px"
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
      manrope: ['var(--font-manrope)'],
      poppins: ['var(--font-poppins)'],
    },
  },
  plugins: [],
};
export default config;
