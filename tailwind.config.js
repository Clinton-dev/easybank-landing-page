/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    fontSize: {
      base: ["18px"],
    },
    extend: {
      colors: {
        "primary-dark-blue": "hsl(233, 26%, 24%)",
        "primary-lime-green": "hsl(136, 65%, 51%)",
        "primary-bright-cyan": "hsl(192, 70%, 51%)",
        "neutral-grayish-blue": "hsl(233, 8%, 62%)",
        "neutral-light-grayish-blue": "hsl(220, 16%, 96%)",
        "neutral-vary-light-gray": "hsl(0, 0%, 98%)",
        "neutral-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
