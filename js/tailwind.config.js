tailwind.config = {
    theme: {
      screens: {
        'xsm': '350px',
        // => @media (min-width: 350px) { ... }
      },
      colors: {
        'primary': '#6A4DF4',
        'primary_light': '#F8F6FE',
        'secondary': '#737373',
        'secondary_light': '#A1A1A1',
        'dark': '#151515',
        'light_dark': '#F3F3F3',
        'gray': '#7B7B7B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          'circle': '50%',
        }
      }
    },
  }