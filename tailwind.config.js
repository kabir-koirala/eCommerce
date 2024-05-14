/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-lite": "#8A8FB9",
        secondary: "#FB2E86",
      },

      screens: {},
      /* we should start with mobile. */
      sm: "576px", // mobile landscape mode
      md: "768px", // tablet
      lg: "1024", // latptop without side numerical in keypad
      xl: "1280px", // normal desktop
      xxl: "1400", // huge monitor
    },
    backgroundImage: {
      'img1': "url('/assets/banner-1.png')",
      'img2': "url('/assets/banner-2.png')",
      'img3': "url('/assets/banner-3.png')",
    }
  },
  plugins: [],
};
