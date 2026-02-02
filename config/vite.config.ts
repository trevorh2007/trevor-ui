import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibraryMode = mode === 'library';

  const baseConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src'),
        '@/components': resolve(__dirname, '../src/components'),
        '@/lib': resolve(__dirname, '../src/lib'),
        '@/assets': resolve(__dirname, '../src/assets'),
      },
    },
    css: {
      postcss: './config/postcss.config.js',
    },
  };

  if (isLibraryMode) {
    return {
      ...baseConfig,
      build: {
        lib: {
          entry: resolve(__dirname, '../src/lib/index.ts'),
          name: 'ComponentLibrary',
          fileName: format => `component-library.${format}.js`,
          formats: ['es', 'umd'],
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        sourcemap: true,
        minify: 'esbuild',
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    };
  }

  return {
    ...baseConfig,
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
