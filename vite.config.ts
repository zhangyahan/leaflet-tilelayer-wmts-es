import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'leaflet-tilelayer-wmts-es',
      fileName: 'leaflet-tilelayer-wmts-es',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vite', 'leaflat'],
      output: {
        globals: {
          leaflat: 'L',
        },
      },
    },
  },
  plugins: [dts({ exclude: ['src/vite-env.d.ts'] })],
})
