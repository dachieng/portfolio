import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
        "2xl": "1400px",
        "3xl": "1536px",
        "4xl": "1600px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shake: "shake 0.6s ease-in-out infinite",
        slideInFromLeft: "slideInFromLeft 0.5s ease-in-out",
        slideOutToLeft: "slideOutToLeft 0.5s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        appBg: {
          DEFAULT: "var(--app-bg)",
        },
        appGradient: {
          DEFAULT: "var(--app-gradient)",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          dark: "var(--blue-dark)",
          "dark-muted": "var(--blue-dark-muted)",
          DEFAULT: "var(--blue-primary)",
          light: "var(--blue-light)",
          muted: "var(--blue-muted)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          dark: "var(--danger-dark)",
          DEFAULT: "var(--danger-primary)",
          light: "var(--danger-light)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          light: "var(--dark-light)",
          muted: "var(--dark-muted)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          light: "var(--gray-light)",
          muted: "var(--gray-muted)",
        },
        input: {
          border: "var(--input-border)",
        },
        light: {
          DEFAULT: "var(--light)",
          muted: "var(--light-muted)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "hsl(var(--muted-foreground))",
          light: "var(--muted-light)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          DEFAULT: "var(--primary)",
          muted: "var(--primary-muted)",
        },
        purple: {
          dark: "var(--purple-dark)",
          DEFAULT: "var(--purple-primary)",
          light: "var(--purple-light)",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          dark: "var(--secondary-dark)",
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          muted: "var(--secondary-muted)",
        },
        skeleton: {
          DEFAULT: "var(--skeleton)",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          dark: "var(--success-dark)",
          DEFAULT: "var(--success-primary)",
          light: "var(--success-light)",
          muted: "var(--success-muted)",
        },
      },
      fontSize: {
        sm: "15px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        slideInFromLeft: {
          from: { left: "-100vw;" },
          to: { left: "0px" },
        },
        slideOutToLeft: {
          from: { left: "0px;" },
          to: { left: "-100vw" },
        },
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1536px",
        "4xl": "1620px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xl: "1200px",
        xs: "475px",
      },
      zIndex: {
        "1000": "1000",
      },
    },
  },
};

export default config;
