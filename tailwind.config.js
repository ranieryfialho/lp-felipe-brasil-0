/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0C1C2A",
        bg2: "#0F2B45",
        accent: "#2ED1C3",
        accent2: "#66E0DB",
        gold: "#C9A47A",
        line: "#1C3147",
        text: "#FFFFFF",
        muted: "#C9D2DF",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "sans-serif"],
        title: ["Montserrat Variable", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0F2B45 0%, #0C1C2A 55%, #07111A 100%)",
      },
    },
  },
  plugins: [],
};
