/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(hsl(236,72%,79%),hsl(237,63%,64%))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'very-light-grayish-blue':' hsl(240, 78%, 98%)',
        'light-grayish-blue':' hsl(234, 14%, 74%)',
        'grayish-blue': 'hsl(233, 13%, 49%)',
        'dark-grayish-blue': 'hsl(232, 13%, 33%)',
      }
    },
  },
  plugins: [],
};
