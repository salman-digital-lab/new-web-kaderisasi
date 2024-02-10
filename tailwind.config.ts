import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-100": "#D4E7F3",
        "primary-200": "#B7D7EB",
        "primary-300": "#92C3E0",
        "primary-400": "#6EB0D6",
        "primary-500": "#4A9CCC",
        primary: "#2688C2",
        "primary-600": "#2071A2",
        "primary-700": "#195B81",
        "primary-800": "#134461",
        "primary-900": "#0D2D41",
        "primary-1000": "#081B27",
        "secondary-100": "#fde0d5",
        "secondary-200": "#fccbb9",
        "secondary-300": "#fbb197",
        "secondary-400": "#fa9674",
        "secondary-500": "#f87c51",
        secondary: "#f7622e",
        "secondary-600": "#ce5226",
        "secondary-700": "#a5411f",
        "secondary-800": "#7c3117",
        "secondary-900": "#52210f",
        "secondary-1000": "#311409",
      },
    },
  },
  plugins: [],
};
export default config;
