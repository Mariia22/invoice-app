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
      primary: "#7C5DFA",
      primaryPale: "#9277FF",
      error: "#EC5757",
      errorPale: "#FF9797",
      secondary: "#7E88C3",
      secondaryPale: "#DFE3FA",
      secondaryDark: "#888EB0",
      paid: "#33D69F",
      pending: "#FF8F00",
      draft: "#373B53"
    },
    extend: {}
  },
  plugins: [],
  darkMode: "class"
};
export default config;
