import { fileURLToPath, URL } from 'node:url';

import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { templateCompilerOptions } from '@tresjs/core';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    vueDevTools(),
    dts({ outDir: 'dist/types', insertTypesEntry: true, tsconfigPath: './tsconfig.app.json', rollupTypes: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-3d-charts',
      fileName: (format) => `vue-3d-charts.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
});
