import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        jpserif: ['"Shippori Mincho B1"', "Cormorant Garamond", "serif"],
      },
      colors: {
        sage: {
          50: "#f4f7f4",
          100: "#e9eee9",
          200: "#d3ddd3",
          300: "#bcccbc",
          400: "#9aae9a",
          500: "#869a86",
          600: "#7a8d7a",
          700: "#5f725f",
          800: "#4a5d4a",
          900: "#374537",
        },
      },
    },
  },
  plugins: [],
};

export default config;
