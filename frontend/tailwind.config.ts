import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "330": "330px",
        "475": "475px",
      },
      colors: {
        primary: "#FFA56A",
        neutral_lightest: "#FFFFFF",
        neutral_lighter: "#F8FAFC",
        neutral_light: "#C1C1C1",
        neutral_dark: "#22211E",
        neutral_darker: "#1E1D1B",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundImage: {
        "proposal-bg": "url('/proposal-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
