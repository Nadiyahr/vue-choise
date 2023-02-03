import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-choise/',
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 3
        }
      }
    }
  }), vueJsx(), createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@import "./src/assets/style/vars.scss";',
        },
    },
},
})
