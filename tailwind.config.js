/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Charter', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
} 