import { colors } from "@monorepo/theme";
import type { Config } from "@tailwindcss/vite";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config;
