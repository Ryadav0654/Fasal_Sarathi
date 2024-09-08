/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image1': "url('/assets/bg-image1.jpg')",
        // 'footer-texture': "url('/assets/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

