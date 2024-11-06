/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        xl: "1240px",
      },
      backgroundImage: {
        "image-hero-mobile": "url('public/assets/image-hero-mobile.png')",
        "image-hero-tablet": "url('public/assets/image-hero-tablet.png')",
        "image-hero-desktop": "url('public/assets/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
