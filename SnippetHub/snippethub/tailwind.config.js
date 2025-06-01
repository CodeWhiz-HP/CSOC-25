/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        CalSans: ['Cal Sans','sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },

      colors: {
        indigo500: '#6366F1',
        indigo600: '#4F46E5',
        gray50 : '#F9FAFB',
        white : '#FFFFFF',
        gray800 : '#1F2937',
        gray500 : '#6B7280',
        gray200 : '#E5E7EB',
        emerald500 : '#10B981',
        amber500 : '#F59E0B',
        red500 : '#EF4444',
        gray100 : '#F3F4F6',
      }
    },
  },
  plugins: [],
}

