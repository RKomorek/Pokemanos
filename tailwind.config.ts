import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "var(--colorbase-1)",
        color2: "var(--colorbase-2)",
        color3: "var(--colorbase-3)",
        color4: "var(--colorbase-4)",
        color5: "var(--colorbase-5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
