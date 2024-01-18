import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig as defineViteConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      reporter: ['html'],
      include: ['**/*.{js,ts,vue}'],
    },
  },
})

const viteConfig = defineViteConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
})

export default mergeConfig(viteConfig, vitestConfig)
