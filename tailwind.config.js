module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f1f1f1',
          dark: '#1b1b1b',
        },
        secondary: {
          light: '#999999',
          dark: '#0d0d0d',
        },
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
