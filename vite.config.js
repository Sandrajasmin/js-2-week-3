import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, './index.html'),
        singup: resolve(__dirname, './singup.html'),
      },
    },
}
});   