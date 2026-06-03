/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: '#FAFAF7',
        bege: '#C7B89A',
        bordo: '#B57B45',
        cobre: '#B57B45',
        creme: '#EDE3CC',
        preto: '#0D0B08',
        carvao: '#1A1410',
        marsala: '#A53148',
        marsalaEscuro: '#6E1A2A',
      },
      fontFamily: {
        serif: ['"drive titulo"', 'Georgia', 'serif'],
        sans: ['"drive texto"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        lighters: ['"lighters"', '"drive titulo"', 'serif'],
        vogue: ['"classyvogue"', '"drive titulo"', 'serif'],
      },
    },
  },
  plugins: [],
}
