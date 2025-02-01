import daisyui from 'daisyui'

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1s infinite',
      },
    }
  },
  daisyui: {
    themes: [
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          "primary": "#ff8000", // Remplace la couleur primaire ici
        },
      },
    ],
  },
  plugins: [daisyui],
}

export default config
