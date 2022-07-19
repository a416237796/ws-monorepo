import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';
import colors from 'windicss/colors';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  attributify: {
    prefix: 'w',
  },
  plugins: [typography(), formsPlugin],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx,md}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
});
