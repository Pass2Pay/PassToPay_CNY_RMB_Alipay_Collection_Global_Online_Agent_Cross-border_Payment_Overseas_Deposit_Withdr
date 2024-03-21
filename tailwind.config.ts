import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1865FF',
        color: '#333333',
        subColor: '#A5ABB2',
        line: '#F7F9FC',
        dark: '#000',
        light: '#fff',
        bg: '#F7F9FC',
      },
      fontFamily: {
        sans: [
          'HarmonyOS Sans',
          'PingFang SC',
          'Microsoft Yahei',
          'Heiti SC',
          'WenQuanYi Micro Hei',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
