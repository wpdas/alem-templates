/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // NOTE: This font will be loaded using Além, see file src/index.tsx
      body: ["DisplayOTF", "sans-serif"],
    },
  },
  plugins: [],
};
