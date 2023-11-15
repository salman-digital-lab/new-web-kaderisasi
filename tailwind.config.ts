import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "bmka-primary-blue": "#1F99CC",
        "bmka-primary-blue-darken": "#1c8ab8",
        "bmka-accent-blue": "#8DBCDD",
        "bmka-accent-orange": "#FF7B40",
        "bmka-accent-orange-darken": "#ff6520",
        "bmka-shade-white": "#F7F5F5",
        "bmka-shade-dark-purple": "#25223C",
      },
    },
  },
  plugins: [],
};
export default config;
