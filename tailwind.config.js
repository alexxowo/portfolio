const colors = {
  primary: '#0075FF',
  ternary: '#001AFF',
  secondary: '#007FF4',
  backgroundGray: '#F0F0F0',
  purple: '#8700F1',
  js: '#F7DF1E',
}

module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      colors: colors
    }
  }
}
