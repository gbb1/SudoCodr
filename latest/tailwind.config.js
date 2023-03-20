/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "wireframe", "black", "lofi", {
      mytheme: {

"primary": "#1f2937",

"secondary": "#4b5563",

"accent": "#2563eb",

"neutral": "#2F2730",

"base-100": "#f5f5f4",

"info": "#78AFED",

"success": "#4ade80",

"warning": "#facc15",

"error": "#ef4444",
      },
    }, ],
  },
}
