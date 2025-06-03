/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        principal: "#0c354b",
        secundario: "#35cdd6",
        texto: "#333333",
        fondo: "#ffffff",
        hover: "#1fa3ad",
      }
    },
    
  },
  plugins: [],
}

