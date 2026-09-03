import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    // Bundled rather than transpiled file-by-file, because `tsc` emits the
    // source's extensionless relative imports verbatim and Node's ESM resolver
    // rejects them. Bundling resolves them at build time, so a consumer needs
    // no bundler-specific resolution to load this package.
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /^@tauri-apps\//],
    },
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
})
