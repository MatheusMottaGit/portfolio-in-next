/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'var(--font-nunito)'
      },

      colors: {
        base: '#071422',
        profile: '#0B1B2B',
        input: '#040F1A',
        post: '#112131',
        borderInput: '#1C2F41',
        label: '#3A536B',
        span: '#7B96B2',
        text: '#AFC2D4',
        subtitle: '#C4D4E3',
        title: '#E7EDF4',
        blue: '#3294F8'
      }
    },
  },
  plugins: [],
}
