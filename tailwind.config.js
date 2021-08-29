module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-50": "#F5F3FF",
        "primary-100": "#EDE9FE",
        "primary-200": "#DDD6FE",
        "primary-300": "#C4B5FD",
        "primary-400": "#A78BFA",
        "primary-500": "#8B5CF7",
        "primary-600": "#7C3AED",
        "primary-700": "#6D28D9",
        "primary-800": "#5B21B6",
        "primary-900": "#4C1D95",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
