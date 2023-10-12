import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{tsx,jsx,ts,js}"
  ],
  daisyui: {
    themes: [
      "light", "dark"
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

  

