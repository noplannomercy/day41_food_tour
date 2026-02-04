import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ee3b2b",
          hover: "#d63527",
          light: "#fee2e0",
          10: "rgba(238, 59, 43, 0.1)",
        },
        background: {
          light: "#f8f6f6",
          dark: "#221210",
        },
        surface: {
          DEFAULT: "#ffffff",
          hover: "#f4f0f0",
          dark: "#2d1a18",
          "dark-alt": "#1a0d0b",
        },
        border: {
          DEFAULT: "#e6dcdb",
          light: "#f4f0f0",
          dark: "#3a2a28",
        },
        text: {
          primary: "#181211",
          secondary: "#896561",
          muted: "#b59b98",
          "dark-muted": "#c0a8a5",
        },
        warning: "#f59e0b",
        success: "#22c55e",
        error: "#ef4444",
      },
      fontFamily: {
        display: [
          "Plus Jakarta Sans",
          "Pretendard",
          "Noto Sans KR",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        primary: "0 4px 14px rgba(238, 59, 43, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
