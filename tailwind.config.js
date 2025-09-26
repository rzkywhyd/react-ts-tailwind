/** @type {import('tailwindcss').Config} */

import important2 from "tailwindcss-important";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [important2()],
};
