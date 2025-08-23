module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tricolor-blue': '#002B7F',
        'tricolor-yellow': '#FCD116',
        'tricolor-red': '#CE1126',
        'carpathian-forest': '#1F3A3D',
        'danube-mist': '#E9EEF2',
        'transylvanian-stone': '#2D2D2D',
        paper: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
