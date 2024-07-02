import { defineConfig } from "vite";
import reactPlugin from '@vitejs/plugin-react';
import { resolve } from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    reactPlugin(), 
    dts({ include: ["lib"] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },
})
