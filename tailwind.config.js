/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {},
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "#6320EE",
          "primary-content": "#ffffff",
          secondary: "#8075FF",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-content": "#161E28",
          neutral: "#3d4451",
          "neutral-content": "#121921",
          "base-100": "#f2f2f2",
          "base-200": "#f0f0f0",
          "base-300": "#eeeeee",
          "base-content": "#121921",
        },
      },
      {
        dark: {
          "color-scheme": "dark",
          primary: "#6320EE",
          "primary-content": "#121921",
          secondary: "#8075FF",
          "secondary-content": "#ffffff",
          accent: "#96f2d7",
          "accent-content": "#ffffff",
          neutral: "#141814",
          "neutral-focus": "#121921",
          "neutral-content": "#B8B9BC",
          "base-100": "#161827",
          // "base-100": "#1D2034",
          // "base-100": "#111",
          "base-200": "#21243A",
          "base-300": "#3D454E",
          "base-content": "#f2f2f2",
        },
      },
    ],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
