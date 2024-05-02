import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  federation({
    name: 'remote_app',
    filename: 'remoteEntry.js', // default file name
    exposes: {
      './Login': './src/Login.html',
    }
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },

})
