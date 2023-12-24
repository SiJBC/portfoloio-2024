import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Omit<Config, "content"> = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "theme-black": "#0D0D0D",
        "theme-white": "#FFFFFF",
        "theme-onyx": "#181818",
        "theme-dark-gray": "#808080",
        "theme-gray": "rgba(128, 128, 128, 0.5)",
        "theme-light-gray": "#C5C5C5",
        "theme-light-blue": "rgba(63, 100, 234, 0.43)",
        "theme-light-red": "rgba(233, 63, 64, 0.43)",
        "theme-light-yellow": "rgba(255, 184, 0, 0.43)",
        "theme-card-border": "#383737",
        "theme-white-10%": "rgba(255, 255, 255, 0.1)",
        "theme-white-20%": "rgba(255, 255, 255, 0.2)",
        "theme-black-50%": "rgba(21, 21, 21, 0.5)",
        "theme-main-bg": "#FBFBFB",
        "theme-faint-white": "#F3F3F3",
        "theme-light-card-border": "#EBEBEB",
        "theme-card-bg": "#F6F6F6",
        "theme-card-bg-hover": "#EDEDED",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
