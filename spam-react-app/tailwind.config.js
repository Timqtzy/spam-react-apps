const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    keyframes: {
      "fade-in-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 0.3s ease-out",
    },
    extend: {
      colors: {
        customRed: "#9f2927",
        customRedHover: "#d62926",
        customYellow: "#f8f2db",
        customNavCol: "#fdeaea",
        customLightYellow: "rgba(248,242,219,1)", // Light yellow
        customYellow2: " rgba(242,232,192,1)", // Yellow
      },
      screens: {
        s: "0px",
        sm: "640px",
        md: "768px",
        smd: "944px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      datatables: true,
    }),
  ],
};
