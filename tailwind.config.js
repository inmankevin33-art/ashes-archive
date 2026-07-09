module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ashes-dark': '#0a0e27',
        'ashes-charcoal': '#1a1f3a',
        'ashes-gold': '#d4af37',
        'ashes-light-grey': '#b0b8cc',
      },
    },
  },
  plugins: [],
}