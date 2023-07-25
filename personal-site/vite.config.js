

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['src/assets/linkedin.png', 'src/assets/GitHub-PNG-Isolated-Photo.png'],
    }
  }
})
