import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// const root = resolve(__dirname, '.')
const root = resolve(__dirname, './src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  base: '/2048_game_vite-js/',

  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:8080',
  },

  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      tiff: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],

  root,

  resolve: {
    alias: {
      // '@': resolve(__dirname, '/node_modules/bootstrap'),
      // 'bootstrap': resolve(__dirname, '/node_modules/bootstrap'),
    },
  },

  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // about: resolve(root, 'about/about.html'),
        // home: resolve(root, 'home/home.html'),
      },

      // output: { // remove hashes from filenames on build
      //     entryFileNames: `assets/[name].js`,
      //     chunkFileNames: `assets/[name].js`,
      //     assetFileNames: `assets/[name].[ext]`,
      // },
      output: {
        assetFileNames: ({ name }) => {
          name = name.toLowerCase();

          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/styles/[name]-[hash][extname]';
          }

          // default value
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
