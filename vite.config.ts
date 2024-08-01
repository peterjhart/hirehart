import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as fs from 'node:fs'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.production.html',
    },
  },
  plugins: [react(), renameIndexPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})

function renameIndexPlugin() {
  return {
    name: 'rename-index',
    closeBundle() {
      fs.renameSync('dist/index.production.html', 'dist/index.html')
    },
  }
}
