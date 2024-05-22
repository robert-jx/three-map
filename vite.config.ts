import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@别名
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // ↓解析配置
  resolve: {
    // ↓路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  // 静态资源基础路径 base: './' || '',
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
