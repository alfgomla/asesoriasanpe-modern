import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}", // Si creaste esta carpeta fuera de app
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a5f",
          dark: "#152a45",
          light: "#2d4a6f",
        },
        accent: {
          DEFAULT: "#d4af37",
          light: "#e5c158",
          dark: "#b8962e",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          900: "#0f172a",
        },
      },
      // ... resto de tu configuración de fuentes y animaciones
    },
  },
  plugins: [],
};
export default config;