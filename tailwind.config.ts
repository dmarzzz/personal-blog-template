import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#154CA3',  // Update primary color to red
        'glitter': '#ffd700', // Glitter effect color (gold)
      },
      backgroundImage: {
        'rainbow': 'linear-gradient(90deg, #FFFF00 6%, #FFA500 25%, #F14444 45%, #D53567 55%, #9A109A 94%)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(5px)',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'], // Comic Sans font
      },
      boxShadow: {
        'custom-normal': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
        'custom-inset': 'inset 9px 9px 16px rgba(163, 177, 198, 0.6), inset -9px -9px 16px rgba(255, 255, 255, 0.5)',
        'glitter': '0 0 8px rgba(255, 215, 0, 0.6)',  // Glitter shadow for hover effect
      },
      borderRadius: {
        custom: '30px',
      },
      transitionProperty: {
        'custom': 'box-shadow, transform',
        'glitter': 'box-shadow',
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
