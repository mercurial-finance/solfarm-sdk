import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.js'],
  format: ['esm', 'cjs'],
  splitting: true,
  sourcemap: true,
  minify: false,
  clean: true,
  skipNodeModulesBundle: true,
  dts: false,
  external: ['node_modules'],
}));