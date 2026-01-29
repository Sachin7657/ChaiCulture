/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chai-bg': '#f6f1ea',
        'chai-primary': '#3b2f2f',
        'chai-accent': '#c9a24d',
        'chai-accent-hover': '#a8832f',
        'chai-muted': '#6b5e5e',
      },
    },
  },
  plugins: [],
}
