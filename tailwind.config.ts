import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night:     '#1A1A2E',
        deep:      '#0D1429',
        gold:      '#C9A96E',
        goldLight: '#E2C99A',
        parchment: '#E8DCC8',
        earth:     '#4A3728',
        mist:      '#F5F0E8',
        ink:       '#1C1612',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['Cormorant', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;