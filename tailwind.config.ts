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
		  primary: "var(--color-primary)",
		  secondary: "var(--color-secondary)",
		  background: "var(--color-background)",
		  text: "var(--color-text)",
		},
		fontFamily: {
			sans: ["'Montserrat'", 'sans-serif'], // Override default sans-serif
		  },
		screens: {
		  sm: '772px',  // Custom sm breakpoint at 772px
		  md: '1040px', // Custom md breakpoint at 1040px
		},
	  },
	},
  plugins: [],
} satisfies Config;
