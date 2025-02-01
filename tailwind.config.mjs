import daisyui from 'daisyui'
const config = {
 content: [
   './pages/**/*.{js,ts,jsx,tsx,mdx}',
   './components/**/*.{js,ts,jsx,tsx,mdx}',
   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
 },
 daisyui: {
  themes: ["autumn"],
},
 plugins: [daisyui],
}
export default config