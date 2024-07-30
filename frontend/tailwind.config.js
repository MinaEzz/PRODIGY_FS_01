/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-300": "#dfb1ff",
        "primary-400": "#cc80ff",
        "primary-500": "#b84ffd",
        "primary-600": "#a020f0",
        "primary-700": "#8f1cd4",
        "primary-800": "#781cad",
        "primary-900": "#62188b",
        "primary-950": "#440467",
      },
    },
  },
  plugins: [daisyui],
};
