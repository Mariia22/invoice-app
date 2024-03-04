import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      text: "#FFFFFF",
      darkText: "#141625",
      background: "#F8F8FB",
      headerBackground: "#252945",
      headerText: "#0C0E16",
      primary: "#7C5DFA",
      primaryPale: "#9277FF",
      secondary: "#7E88C3",
      secondaryPale: "#DFE3FA",
      secondaryDark: "#888EB0",
      paidColor: "#33D69F",
      pendingColor: "#FF8F00",
      draftColor: "#373B53",
      borderColor: "#494E6E",
      cardColor: "#1E2139",
      tableColor: "#F9FAFE",
      contrast: "#EC5757",
      contrastPale: "#FF9797",
      black: "#000000",
      blackShadow: "rgba(0, 0, 0, 0.1)"
    },
    extend: {
      boxShadow: {
        modal: "0 10px 10px -10px rgba(72, 84, 159, 0.1)"
      },
      backgroundImage: {
        "delete-button": "url('/assets/icon-delete.svg')"
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;
