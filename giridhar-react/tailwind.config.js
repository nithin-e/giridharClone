/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003a70",
        accent: "#01b08d",
        accentHover: "#35b6b4",
        brand: "#3f5ceb",
        dark: "#09202c",
        muted: "#5b4f68",
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

