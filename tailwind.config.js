/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-effra)"],
      },
      screens: {
        "3xl": "1600px",
      },
      boxShadow: {
        "3xl": "0px 24px 128px 0px rgb(57 57 57 / 20%)",
      },
    },
  },
  plugins: [],
};
