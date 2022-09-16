tailwind.config = {
    theme: {
      extend: {
        screens: {
          'x-sm': '320px',
          // => @media (min-width: 340px - 639px) { ... }
  
          'sm-mob': '640px',
          // => @media (min-width: 640px - 767px) { ... }
    
          'md-tab': '768px',
          // => @media (min-width: 768px - 1023px) { ... }
    
          'lg-lap': '1024px',
          // => @media (min-width: 1024px - 1279px) { ... }
    
          'xl-pc': '1280px',
          // => @media (min-width: 1280px - 1535px) { ... }
    
          'xxl-pc': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        maxWidth: {
          'container': '1320px',
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
        borderRadius: {
          'circle': '50%',
        }
      }
    },
  }