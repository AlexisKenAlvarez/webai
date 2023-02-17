/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/mainbg.webp')",
        'world': "url('/world.webp')",
        token: "url('/tokenbg.webp')"
      },
      fontFamily: {
        'saira': ['Saira'],
        'poppins': ['Poppins']
      },
      colors: {
        'heroblue': "#000D3F",
        'darker': '#06071B',
        'button': '#0710CC',
        'header': '#54D1F9',
        'tokenbg': '#181234'
      },
      boxShadow: {
        'eco': '0px -17px 51px 0px rgba(6,7,27,0.75)',
        'glow': '0px 0px 150px 60px rgba(35,71,151,0.40)',
        // 'nav': '0px 32px 40px 0px rgba(0,0,0,0.75) inset'
      }
    },
  },
  plugins: [],
}
