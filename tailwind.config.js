module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["layouts/**/*.html"],
    options: {
      safelist: ["bg-paceA", "bg-paceB", "bg-paceC", "bg-paceD"],
    },
  },
  plugins: [
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1d1d1f',
            'h1, h2, h3': {
              fontWeight: '800',
            },
            blockquote: {
              fontSize: '1.5rem'
            },
            p: {
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
          },
        },
      },
      colors: {
        paceA: "#f9ae36",
        paceB: "#7495b1",
        paceC: "#56755e",
        paceD: "#ec7773",
        paceText: "#1d1d1f",
        pacePrimary: "#1d1d1f",
        paceGray: "#262629",
        paceLightGray: "#f5f5f5",
        paceAction: "#0090DA",
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        base: ['Inter', 'sans-serif'],
        serif: ['Times New Roman', 'serif'],
      },
    },
  },
}
