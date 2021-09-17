import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()]
    }),
    // 按需导入element-plus的css样式
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => `element-plus/lib/theme-chalk/${name}.css`
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {}
})
