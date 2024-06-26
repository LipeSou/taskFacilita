import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(fileURLToPath(new URL('./src', import.meta.url)))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${path.resolve(__dirname, 'src/global/variables.styl')}"`
      }
    }
  }
})
