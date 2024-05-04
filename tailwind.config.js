import animations from "@midudev/tailwind-animations"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
}

