export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maria's grüne Farbpalette - inspiriert von Monstera & Alocasia (soft & natürlich)
        primary: {
          50: '#f0fdf4',   // sehr helles Grün
          100: '#dcfce7',  // hell
          200: '#bbf7d0',  // soft green
          300: '#86efac',  // mint
          400: '#6fd89c',  // softer fresh green
          500: '#4db882',  // gedämpftes Hauptgrün (weniger grell)
          600: '#3d9669',  // darker green
          700: '#2d7550',  // forest green
          800: '#1e5a3a',  // deep green
          900: '#14532d',  // sehr dunkel
        },
        accent: {
          50: '#ecfdf5',   // mint cream
          100: '#d1fae5',  // light mint
          200: '#a7f3d0',  // soft mint
          300: '#7fdfb8',  // softer bright mint
          400: '#5dc99e',  // gedämpftes accent mint
          500: '#48a882',  // softer emerald
          600: '#3a8a6a',  // darker emerald
          700: '#2d6b52',  // deep emerald
          800: '#20513d',  // forest emerald
          900: '#064e3b',  // darkest
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-2': '70% 30% 30% 70% / 60% 60% 40% 40%',
        'organic-3': '40% 60% 60% 40% / 70% 30% 70% 30%',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-organic': 'linear-gradient(135deg, #dcfce7 0%, #86efac 50%, #22c55e 100%)',
        'gradient-plant': 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
      }
    },
  },
  plugins: [],
};
