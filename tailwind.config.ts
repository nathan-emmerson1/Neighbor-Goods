import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
            "primary": "#01579b",
          
            "secondary": "#50a3cc",
          
            "accent": "#fb8c00",
          
            "neutral": "#ffca28",
          
            "base-100": "#f4f4f4",
          
           "info": "#93c5fd",
          
            "success": "#10b981",
          
            "warning": "#9d174d",
          
            "error": "#881337",
          },
        },
      ],
    },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;