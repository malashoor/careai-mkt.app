import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('../packages/ui-tokens/tailwind.preset.cjs')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Additional marketing-specific overrides can go here
      fontFamily: {
        display: ['SF Pro Display', 'Inter', 'system-ui'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.06)',
      },
      colors: {
        'brand-bg': '#f4f7f6',
        'brand-fg': '#212529',
        'brand-muted': '#6c757d',
        'brand-border': '#dee2e6',
      },
    },
  },
  plugins: [],
}
export default config
